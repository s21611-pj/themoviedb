import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header.js';
import { PopularMovies } from './components/PopularMovies.js';
import { Movie } from './components/Movie.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieByGenreSearchEngine } from './components/MovieByGenreSearchEngine';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <PopularMovies />
        <Routes>
          <Route path="/movie" element={ <Movie /> } />
          <Route path="/movieByGenre" element={ <MovieByGenreSearchEngine /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
