import React from 'react';
import AppBar from './components/AppBar';
import { Container } from './components'
import UserProfile from './components/user-component/UserProfile';

const BASE_URL = 'https://api.github.com/users/';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      url: `${BASE_URL}danielkanangila`,
    }
  }

  onUserSelected = url => {
    this.setState({
      url: url,
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar onSearch={this.onUserSelected} />
        <Container>
          <UserProfile onUserSelected={this.onUserSelected} url={this.state.url} />
        </Container>
      </div>
    );
  }

}

export default App;
