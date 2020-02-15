import React from 'react';
import AppBar from './components/AppBar';
import { Container } from './components'
import UserProfile from './components/user-component/UserProfile';

const API_URL = 'https://api.github.com/users/';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      username: 'danielkanangila',
    }
  }
  
  onSearch = query => {
    // this.setState({
    //   username: query,
    // });
    window.username = query;
  }

  render() {
    return (
      <div className="App">
        <AppBar onSearch={this.onSearch} />
        <Container>
          <UserProfile url={API_URL} username={this.state.username} />
        </Container>
      </div>
    );
  }

}

export default App;
