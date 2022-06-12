import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header.js';
import { MovieCard } from './components/MovieCard.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard />
    </div>
  );
}

export default App;
