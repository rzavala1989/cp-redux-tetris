import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { GridBoard } from './components/GridBoard';
import { NextBlock } from './components/NextBlock';
import { ScoreBoard } from './components/ScoreBoard';
import { Controls } from './components/Controls';
import { Modal } from './components/Modal';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <h3>Tetris!</h3>
        </header>
        <NextBlock />
        <GridBoard />
        <ScoreBoard />
        <Controls />
        <Modal />
      </div>
    </Provider>
  );
}

export default App;
