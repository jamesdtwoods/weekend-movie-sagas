import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieForm from '../MovieForm/MovieForm';
import MovieEditForm from '../MovieEditForm/MovieEditForm';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/movieDetails/:id" exact>
          <MovieDetails />
        </Route>

        <Route path="/addMovie" exact>
          <MovieForm />
        </Route>

        <Route path="/editMovie/:id" exact>
          <MovieEditForm />
        </Route>
        
      </Router>
    </div>
  );
}


export default App;
