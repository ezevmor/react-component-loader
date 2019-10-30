import React, { useState } from 'react';
import './App.css';

import Buttons from './components/buttons';
import ComponentLoader from './components/component-loader';

function App() {
  const [selected, setSelected] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Buttons onSelect={(value) => setSelected(value)}></Buttons>
        <br></br>
        <ComponentLoader toLoad={selected}></ComponentLoader>
      </header>
    </div>
  );
}

export default App;
