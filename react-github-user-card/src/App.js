import React, {useState} from 'react';
import AppBar from './components/AppBar';

function App() {
  const [username, setUsername] = useState('danielkanangila')

  const onSearch = query => {
    setUsername(query);
  }

  return (
    <div className="App">
      <AppBar onSearch={onSearch} />
    </div>
  );
}

export default App;
