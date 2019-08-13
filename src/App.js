import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

const Hater = () => <h1>I ABSOLUTELY LOVE DOGS</h1>;

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="App-nav">
          <Link to="/">About</Link>
          <Link to="/dog">Dog</Link>
          <Link to="/hater">Hater</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
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
