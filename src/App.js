import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';

import Rotas from './routes';


function App() {
  return (
    <div className="App">
        <Menu />
        <Rotas />
    </div>
  );
}

export default App;
