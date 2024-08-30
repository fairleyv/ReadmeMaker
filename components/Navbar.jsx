import React from "react"
import logo from "../src/assets/readmeMakerLogo.jpg"

export default function Navbar () {
    return (
    <nav className="navbar">
        <div className="navbar--title--section">
            <img className="navbar--logo" src={logo} width="50px"/>
            <h1 className="navbar--title">Readme Maker</h1>
        </div>

        <div className="navbar--links--section">
            <h3 className="navbar--link"><a href="#">How To Use</a></h3>
            <h3 className="navbar--link"><a href="#">ReadMe Maker</a></h3>
            <h3 className="navbar--link"><a href="#">Download Button</a></h3>
            <h3 className="navbar--link"><a href="#">Footer</a></h3>
        </div>

    </nav>
    )
}