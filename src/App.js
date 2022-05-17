import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { GridBoard } from './components/GridBoard';
import { NextBlock } from './components/NextBlock';
import { ScoreBoard } from './components/ScoreBoard';
import { Controls } from './components/Controls';
import { Modal } from './components/Modal';
import './App.css';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <h3>Tetris!</h3>
        </header>
        <NextBlock />
        <GridBoard />
        <ScoreBoard score={0} />
        <Controls />
        <Modal />
      </div>
    </Provider>
  );
}

export default App;
