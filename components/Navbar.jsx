import React from "react"
import logo from "../src/assets/readmeMakerLogo.jpg"

export default function Navbar () {
    return (
    <nav className="navbar">
        <div className="navbar--title--section">
            <img className="navbar--logo" src={logo} width="50px"/>
            <h1 className="navbar--title">Readme Maker</h1>
        </div>

        <ul class="navbar--menu">
                <li class="navbar--item">
                    <a href="#" className="navbar--link">How To Use</a>
                </li>
                <li class="navbar--item">
                    <a href="#" className="navbar--link">Readme Maker</a>
                </li>
                <li class="navbar--item">
                    <a href="#" className="navbar--link">Download Button</a>
                </li>
                <li class="navbar--item">
                    <a href="#" className="navbar--link">Footer</a>
                </li>
            </ul>
        <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </nav>
    )
}