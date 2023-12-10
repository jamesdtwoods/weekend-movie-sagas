import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('SAGA/FETCH_MOVIES', fetchAllMovies)
  yield takeEvery('SAGA/FETCH_MOVIE_DETAILS', fetchMovieDetails)
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

function* fetchMovieDetails(action) {
  console.log('ACTION:', action);
  try {
    // Get the movie details:
    const moviesResponse = yield axios ({
      method: 'GET',
      url: `/api/movies/${action.payload}`
  })
    // Set the value of the movie details reducer:
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchMovieDetails error:', error);
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

// Used to store movie details returned from the server
const movieDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
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
    movieDetails,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
