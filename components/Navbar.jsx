import React from "react"
import logo from "../src/assets/readmeMakerLogo.jpg"
import {useState} from "react"

export default function Navbar () {

const [isActive, setIsActive] = useState(false)

function mobileMenu () {
    setIsActive(prevState => !prevState)
}

function closeMenu () {
    setIsActive (prevState => !prevState)
}

const activeClass = isActive ? "active" : ""

    return (
    <nav className="navbar">
        <div className="navbar--title--section">
            <img className="navbar--logo" src={logo} width="50px"/>
            <h1 className="navbar--title">Readme Maker</h1>
        </div>

        <ul className={`navbar--menu ${activeClass}`}>
                <li className="navbar--item">
                    <a href="#howtouse--component" className="navbar--link" onClick={closeMenu}>How To Use</a>
                </li>
                <li className="navbar--item">
                    <a href="#readme--component" className="navbar--link" onClick={closeMenu}>Readme Maker</a>
                </li>
                <li className="navbar--item">
                    <a className="navbar--link disabled--link" onClick={closeMenu}>Download Button (coming soon)</a>
                </li>
                <li className="navbar--item">
                    <a href="#footer--component" className="navbar--link" onClick={closeMenu}>Footer</a>
                </li>
            </ul>
        <div className={`hamburger ${activeClass}`} onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </nav>
    )
}