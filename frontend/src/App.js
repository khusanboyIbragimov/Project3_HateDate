import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Feeds from './components/Feeds'
import Profile from './components/Profile'
import About from './components/About'
import logo from './images/hnd_g.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav class="navbar navbar-default">
            <div class="row">
              <div class="col-md-8">
                <div class="navbar-header" id="login-navbar-header">
                  <a class="navbar-brand">
                  <Link to="/login">
                    <div>
                      <img class="animated infinite pulse" id="logo" src={logo} alt="logo" />
                    </div>
                    </Link>
                  </a>
                  <h1 style={{ color: "white" }} class="logo-text animated infinite pulse "> Hate&Date</h1>
                </div>
              </div>
              <div class="col-md-3">
                <div class="text-right">
                  <a>
                    <Link to="/login">
                      <button type="button" class="btn"> Login </button>
                    </Link>
                  </a>
                  <a>
                    <Link to="/about">
                      <button type="button" class="btn">About Us</button>
                    </Link>
                  </a>
                </div>
              </div>
              <div class="col-md-1"></div>
            </div>
          </nav>
      </div>

        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/feeds' component={Feeds} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
