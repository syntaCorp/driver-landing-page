import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import LoginForm from './components/LoginForm';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
