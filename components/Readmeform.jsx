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

    function renderLicenseLink(license) {
        if (license == 'N/A') {
          return "";
        } else if (license == 'Apache_2.0') {
          return `(https://opensource.org/licenses/Apache-2.0)`
        }
      
        else if (license == 'BSD_3--Clause') {
          return `(https://opensource.org/licenses/BSD-3-Clause)`
        }
      
        else if (license == 'GPLv3') {
          return `(https://opensource.org/licenses/gpl-3.0)`
        }
      
        else if (license == 'GPL_v2') {
          return `(https://opensource.org/licenses/old-licenses/gpl-2.0.en.html)`
        }
      
        else if (license == 'IPL_1.0') {
          return `(https://opensource.org/licenses/IPL-1.0)`
        }
      
        else {
          return `(https://opensource.org/licenses/${license})`
        }
      }
      
    return (
        <form>

        </form>
    )
}