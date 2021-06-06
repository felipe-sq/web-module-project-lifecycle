import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Followers from './components/Followers';
import User from './components/User';
import SearchForm from './components/SearchForm';

class App extends React.Component {
  constructor() {
    super();
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

  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => {
        this.setState({...this.state, followers: res.data.followers})
      })
      .catch(err => console.log(err))
  }

  fetchUser = (gitUsername) => {
    axios.get(`https://api.github.com/users/${gitUsername}`)
      .then(res => {
        this.setState({...this.state, user: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Container><br />
        <SearchForm fetchUser={this.fetchUser} />
        <User user={this.state.user} />
        <Followers user={this.state.user} fetchFollowers={this.fetchFollowers} />
        </Container>
      </div>
    )
  }
}

export default App;
