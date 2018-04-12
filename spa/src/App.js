import React, { Component } from 'react';
import './App.css';
import {  HashRouter } from "react-router-dom";
import Admin from "./admin";
import Login from "./login";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      userName: ""//welcome user after login
    }
    this.updateLoginState = this.updateLoginState.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  updateLoginState(isLoggedIn){
    this.setState({
      isLoggedIn
    })
  }

  updateUserName(userName){
    debugger;
    this.setState({
      userName
    })
  }

  render() {

    const routerCode = !this.state.isLoggedIn? (
    <Login updateLoginState={this.updateLoginState} updateUserName={this.updateUserName} /> )
   : ( <HashRouter><Admin userName={this.state.userName} updateLoginState={this.updateLoginState} /></HashRouter>)
    return (    
        <div>
          {routerCode}
        </div>
    );
  }
}

export default App;
