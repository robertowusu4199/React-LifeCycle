import logo from './logo.svg';
import './App.css';
import React from 'react';
import UsersClass from './Component/UsersClass';
import UsersFunction from './Component/UsersFunction'

function App() {
  return (
    <div className="App">
      {/*<UsersClass />*/}

      <UsersFunction />
    </div>
  );
}

export default App;
