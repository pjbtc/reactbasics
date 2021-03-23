
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import health from './images/health.svg';
import Navbar from './Navbar';
import Home from './Home';
import Blog from './Blog';
import Counter from './Counter';
import ClassClick from './ClassClick';
import FunctionClick from './FunctionClick';
import EventBind from './EventBind';
import './App.css';
import ParentComponent from './ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './NameList';
import Form from './Form';
import LifecycleA from './LifecycleA';

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
        <div className="App-header">
          <img src={health} className="App-logo" alt="logo" />
          <h2>Welcome me myself webdeveloper</h2>
        </div>
        <Navbar/>
        <LifecycleA/>
        {/* <Form/>*/}

       {/*  <NameList/>*/}
        {/* <UserGreeting/>*/}
        {/* <ParentComponent/>*/}
        {/* <EventBind/>*/}
      
       {/* <Counter/>*/} 
        {/*<ClassClick/> */}
        {/*<FunctionClick/> */}
        <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/blog" component={Blog}/>
        </Switch>
      </div>
      </Router>
     
    );
  }
}

export default App;
