import React from "react"
import logo from "../src/assets/readmeMakerLogo.jpg"

export default function Navbar () {
    return (
    <nav>
        <div className="navbar--title--section">
            <img className="navbar--logo" src={logo} width="50px"/>
            <h1 className="navbar--title">Readme Maker</h1>
        </div>

        <div className="navbar--links--section">
            <h3 className="navbar--link">How To Use</h3>
            <h3 className="navbar--link">ReadMe Maker</h3>
            <h3 className="navbar--link">Download Button</h3>
            <h3 className="navbar--link">Footer</h3>
        </div>

    </nav>
    )
}