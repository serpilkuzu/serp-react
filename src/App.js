import logo from './nehir.jpeg';
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Serpil Kuzu
        </p>

        <a
            className="App-link"
            href="https://www.linkedin.com/in/serpilkuzu/"
            target="_blank"
            rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
            className="App-link"
            href="https://github.com/serpilkuzu"
            target="_blank"
            rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
            className="App-link"
            href="https://www.instagram.com/kuzu.serpil/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
