import React from "react";
import { Link } from "react-router-dom";
import "./Workshop.css";
import Card from "../card/Card.jsx";

// include the following in the head section of index.html
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
function Workshop( ) {
    return(
        <>
       <Card />     
       <Card />     
       <Card />     
        </>
    );
}

export default Workshop;