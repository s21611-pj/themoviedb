import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header.js';
import { PopularMovies } from './components/PopularMovies.js'

function App() {
  return (
    <div className="App">
      <Header />
      <PopularMovies />
    </div>
  );
}

export default App;
