import React from "react"
import {useState} from "react"

export default function ReadmeForm () {
    const [formData, setFormData] = useState(
        {
            title:"", 
            description:"", 
            includeTableofContents:false, 
            installation:"", 
            usage: "", 
            credits:"",
            license:"",
            licenseLink:"",
            licenseBadge:"",
            tests:"",
            githubUsername: "",
            email: ""
        } 
    )


    function handleChange (event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit (event) {
        event.preventDefault()
        renderLicenseBadge()
        renderLicenseLink()
        console.log(formData)
    }


    function renderLicenseBadge() {
        if (formData.license == 'N/A') {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseBadge: ""
              }))
        } else if (formData.license == 'MIT') {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseBadge: `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`
              }))
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseBadge: `[![License](https://img.shields.io/badge/License-${formData.license}-blue.svg)]`
              }))
        }
    }

    function renderLicenseLink() {
        if (formData.license == 'N/A') {
          setFormData(prevFormData => ({
            ...prevFormData,
            licenseLink: ""
          }))
        } else if (formData.license == 'Apache_2.0') {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseLink: "(https://opensource.org/licenses/Apache-2.0)"
              }))
        }
      
        else if (formData.license == 'BSD_3--Clause') {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseLink: `(https://opensource.org/licenses/BSD-3-Clause)`
              }))
        }
      
        else if (formData.license == 'GPLv3') {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseLink: `(https://opensource.org/licenses/gpl-3.0)`
              }))
           
        }
      
        else if (formData.license == 'GPL_v2') {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseLink: `(https://opensource.org/licenses/old-licenses/gpl-2.0.en.html)`
              }))
        }
      
        else if (formData.license == 'IPL_1.0') {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseLink: `(https://opensource.org/licenses/IPL-1.0)`
              }))
        }
      
        else {
            setFormData(prevFormData => ({
                ...prevFormData,
                licenseLink: `(https://opensource.org/licenses/${formData.license})`
              }))
        }
      }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Project Title"
                onChange={handleChange}
                name="title"
                value={formData.title}
            />
            <textarea 
                type="text"
                placeholder="Description"
                onChange={handleChange}
                name="description"
                value={formData.description}
            />
            <label htmlFor="tableOfContents">Include a Table of Contents?</label>
            <input 
                type="checkbox"
                id="tableOfContents"
                onChange={handleChange}
                name="includeTableofContents"
                checked={formData.includeTableofContents}
            />
            <textarea 
                type="text"
                placeholder="Installation"
                onChange={handleChange}
                name="installation"
                value={formData.installation}
            />
            <textarea 
                type="text"
                placeholder="Usage"
                onChange={handleChange}
                name="usage"
                value={formData.usage}
            />
            <textarea 
                type="text"
                placeholder="Credits"
                onChange={handleChange}
                name="credits"
                value={formData.credits}
            />
            <label htmlFor="license">What license would you Like?</label>
            <select id="license"
                onChange={handleChange}
                name="license"
                value={formData.license}
            >
                <option value="N/A">N/A</option>
                <option value="Apache_2.0">Apache_2.0</option>
                <option value="BSD_3--Clause">BSD_3--Clause</option>
                <option value="GPLv3">GPLv3</option>
                <option value="GPL_v2">GPL_v2</option>
                <option value="IPL_1.0">IPL_1.0</option>
                <option value="ISC">ISC</option>
                <option value="MIT">MIT</option>
                

            </select>
            <textarea 
                type="text"
                placeholder="Tests"
                onChange={handleChange}
                name="tests"
                value={formData.tests}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input
                type="text"
                placeholder="Github Username"
                onChange={handleChange}
                name="githubUsername"
                value={formData.githubUsername}
            />
            <button>Create Readme</button>
        </form>
    )
}