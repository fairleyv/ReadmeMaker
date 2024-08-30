import React from "react"
import {useState} from "react"

export default function ReadmeForm () {
    function renderLicenseBadge(license) {
        if (license == 'N/A') {
            return "" 
        } else if (license == 'MIT') {
            return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`
        } else {
            return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
        }
    }
    return (
        <form>

        </form>
    )
}