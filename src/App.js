import { GridBoard } from './components/GridBoard';
import { NextBlock } from './components/NextBlock';
import { ScoreBoard } from './components/ScoreBoard';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Tetris!</h3>
      </header>
      <NextBlock />
      <GridBoard />
      <ScoreBoard score={0} />
    </div>
  );
}

export default App;
