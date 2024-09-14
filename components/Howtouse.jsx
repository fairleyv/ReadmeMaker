import React from "react"
import {useState} from "react"

export default function HowtoUse () {
    return (<div className="howtouse--section" id="howtouse--component">
        <h2 className="howtouse--section--header">
            How To Use
        </h2>
        <p className="howtouse--section--paragraph">
        In order to generate the markup for your readme file just fill out the information for each section in the form below. If you don't have anything that you want to fill in for a section or that section isn't applicable just type "N/A". After you've filled in each section in the form click the "Create Readme" button at the bottom of the form. That will propagate the readme markup on the right with formatted code that matches a general layout for a readme. After this you can copy and paste the generated markup into a Readme.md file in your code.
        </p>
        <p className="howtouse--section--paragraph">
        I do recommend adding an indent to the text under the Description subheading once you've pasted the markup into your readme.md file. This will encase the description in a block that looks nice when displayed.
        </p>

    </div>)
}