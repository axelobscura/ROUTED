import React from 'react';
import {Route} from 'react-router-dom';
import Dog from './Dog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/dog' component={Dog} />
    </div>
  );
}

export default App;
