import React from "react";
import './left-side.css'
import serpil from "./serpil.jpg";


export default function LeftSide(props) {
    return (
        <div className="left-side">
            <img src={serpil} className="App-logo" alt="logo" />
            <h3>Amsterdam / Netherlands</h3>
            <h3>Contact Email: serpilkuzuu@gmail.com</h3>
        </div>

    );
}