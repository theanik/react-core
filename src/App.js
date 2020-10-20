import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
      <Hello title="Mr." name="Anik">What's going on.</Hello>
      <Welcome greet="Hello" name="World"></Welcome>
    </div>
    
  );
}

export default App;
