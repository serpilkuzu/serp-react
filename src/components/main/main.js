import React from "react";
import "./main.css";
import LeftSide from "../left-side/left-side";
import Content from "../content/content";

export default function Header(props) {
    return (
        <div className="main">
            {/*<h1>{props.message}</h1>*/}
            <LeftSide/>

            <Content/>


        </div>
    );
}
