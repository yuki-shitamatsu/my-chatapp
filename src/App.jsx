import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import {Login, SignUp, Room} from './components/index';
import {AuthProvider} from './AuthService'
import LoggedInRoute from './LoggedInRoute'

function App() {

  // componentDidUpdate() {
  //   const scrollArea = document.getElementById('scroll-area')
  //   if(scrollArea) {
  //     scrollArea.scrollTop = scrollArea.scrollHeight
  //   }
  // }

  

  return (
    <AuthProvider>
      <Router>
          <Switch>
              <LoggedInRoute exact path='/' component={Room} />,
              <Route exact path='/login' component={Login} />,
              <Route exact path='/signup' component={SignUp} />
          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
