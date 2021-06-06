import React from 'react';
import axios from 'axios';
import './App.css';

import Followers from './components/Followers';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    console.log("App constructor");
    this.state = {
      followers: '',
      user: []
    }
  }

  render() {
    console.log("App render!")
    return (
      <div className="App">
        {/* import components here */}
      </div>
    )
  }
  
}

export default App;
