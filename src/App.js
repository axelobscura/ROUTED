import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
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
          <NavLink exact activeClassName="active-link" to="/">About</NavLink>
          <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/c">Dogc</NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/r">Dogr</NavLink>
          <NavLink exact activeClassName="active-link" to="/hater">Hater</NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/dog' component={() => <Dog name='Muffins' />} />
        <Route exact path='/dog/c' component={() => <Dog name='Muffins' />} />
        <Route exact path='/dog/r' render={() => <Dog name='Muskin' />} />
        {/* Not creating a component each time */}
        <Route exact path='/hater' component={Hater} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
