import React from "react";
import './App.css';
import Header from './components/header/header.js'
import Main from './components/main/main'
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <Header title="Serpil Kuzu" />

            <Main message="My content"/>
            <Footer/>


        </div>
    );
}

export default App;
