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
            <a href="github.com/fairleyv">
                <img src={emailLogo} className="footer--logo"/>
            </a>
            <a href="linkedin.com/in/vincent-fairley">
            <img src={githubLogo} className="footer--logo"/>
            </a>
            <a src="mailto:fairleyvincent@gmail.com">
            <img src={linkedinLogo} className="footer--logo"/>
            </a>
        </div>
    </footer>
)
}