import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header title='Attack on Titan Memory Game' currentScore='0' highScore='0' />
      <Cards />
    </div>
  );
}

export default App;
