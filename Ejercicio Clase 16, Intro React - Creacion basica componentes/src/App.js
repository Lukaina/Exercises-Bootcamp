import React from 'react';
import logo from './logo.svg';
import './css/App.css';

import FirstComponent from './components/FirstComponent.js';

function salute(name){
  var presentation = <h2>¡Hello, I'm {name}! 👋</h2>
  return presentation;

}

function App() {
  var name = "Verónica";
 
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ¡Bootcamp 2020! 👩‍💻✌
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        {salute(name)}
      <section className="Components">
        <FirstComponent name="Counter:" />
      </section>
      </header>
    </div>
  );
}

export default App;
