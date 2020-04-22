import React from 'react';
import profileImage from './img/hannah.jpeg';
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Hannah</h2>
      <img src={profileImage} alt="profile-pic"></img>
    </div>
  );
}

export default App;

