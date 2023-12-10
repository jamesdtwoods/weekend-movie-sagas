import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('SAGA/FETCH_MOVIES', fetchAllMovies)
  yield takeEvery('SAGA/FETCH_GENRES', fetchAllGenres)
  yield takeEvery('SAGA/FETCH_MOVIE_GENRE_OF_MOVIE_TO_VIEW', fetchMovieGenreOfMovieToView)
  yield takeEvery('SAGA/CREATE_MOVIE', createMovie)
  yield takeEvery('SAGA/EDIT_MOVIE', editMovie)
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* fetchAllGenres() {
  try {
    // Get the genres:
    const genresResponse = yield axios.get('/api/genres');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_GENRES',
      payload: genresResponse.data
    });
  } catch (error) {
    console.log('fetchAllGenres error:', error);
  }
}

function* fetchMovieGenreOfMovieToView(action) {
  console.log('action', action);
  try {
    // Get the movie genres:
    const moviesResponse = yield axios ({
      method: 'GET',
      url: `/api/movies/${action.payload}`
  })
    // Set the value of the movie genre reducer:
    yield put({
      type: 'SET_GENRE_OF_MOVIE',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchMovieGenres error:', error);
  }
}

function* createMovie(action) {
  console.log('action.payload:', action.payload);
  try {
    // Post the movie:
    const response = yield axios ({
      method: 'POST',
      url: `/api/movies`,
      data: action.payload
  })
    // get all the movies
    yield fetchAllMovies();
  } catch (error) {
    console.log('create movie error:', error);
  }
}

function* editMovie(action) {
  console.log('action.payload:', action.payload);
  try {
    // Post the movie:
    const response = yield axios ({
      method: 'PUT',
      url: `/api/movies/${action.payload.id}`,
      data: action.payload
  })
    // get all the movies
    yield fetchAllMovies();
  } catch (error) {
    console.log('create movie error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie to view genre
const genreOfMovieToView = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRE_OF_MOVIE':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    genreOfMovieToView,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
