import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import Logo from '../src/assets/TC.png'

function Navbar() {
    
    return (
        <div 
        style={{
            fontSize: "20px",
            padding: "20px",
            height: "30px",
            textAlign: "right",
            backgroundColor: "#545454",
           }}
           >
        <p style={{ position: "absolute",
                    left: "auto",
                    width: "50px",
                    height: "60px"}}> TodoList </p>
        <ul style={{}}>
                <li style={{
                    listStyle: "none",
                    display: "inline-block",
                    color: "red"
                    }} >
                        
                <a style={{textDecoration: "none", 
                            color: "#ff70d6", 
                            letterSpacing: "2px", 
                            wordSpacing: "2px"}} href='/'> &nbsp; Home &nbsp; </a>
                <a style={{textDecoration: "none", 
                            color: "#ff70d6", 
                            letterSpacing: "2px"}} href='/mySchedule'> Schedule </a>
                </li>
            </ul>
      
    </div>
    )
}

export default Navbar;