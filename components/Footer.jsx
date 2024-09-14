import React from "react"
import githubLogo from "../src/assets/github.png"
import linkedinLogo from "../src/assets/linkedin.png"
import emailLogo from "../src/assets/email.png"
import {useState} from "react"

export default function Footer () {
    return (
    <footer className="footer--section">
        <div className="footer--createdBy">
            <h4>Created by Vincent Fairley</h4>
        </div>
        <div className="footer--logos">
            <a href="mailto:fairleyvincent@gmail.com">
                <img src={emailLogo} className="footer--logo"/>
            </a>
            <a href="https://github.com/fairleyv">
            <img src={githubLogo} className="footer--logo"/>
            </a>
            <a href="https://www.linkedin.com/in/vincent-fairley">
            <img src={linkedinLogo} className="footer--logo"/>
            </a>
        </div>
    </footer>
)
}