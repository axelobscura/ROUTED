import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

const Hater = () => <h1>I ABSOLUTELY LOVE DOGS</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/dog' component={Dog} />
        <Route exact path='/hater' component={Hater} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
