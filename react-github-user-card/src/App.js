import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Followers from './components/Followers';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    // console.log("App constructor");
    this.state = {
      followers: '',
      user: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/felipe-sq")
      .then(res => {
        this.setState({...this.state, user: res.data})
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update is running");
  }

  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => {
        this.setState({...this.state, followers: res.data.followers})
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log("App render!")
    return (
      <div className="App">
        <Container><br />
        <User user={this.state.user} />
        <Followers user={this.state.user} fetchFollowers={this.fetchFollowers} />
        </Container>
      </div>
    )
  }
  
}

export default App;
