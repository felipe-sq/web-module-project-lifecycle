import React from 'react';
import './App.css';

// import Usercard from './components/Usercard';

class App extends React.Component {
  constructor() {
    super();
    console.log("App constructor");
  }
  
  
  
  render(){
    console.log("App render")
    return (
      <div className="App">
        <h1>GitHub Users</h1>
      </div>
    );
  }

}

export default App;
