import React from "react"
import {useState} from "react"

export default function ReadmeMarkup (props) {

    const tableOfContentsArr = props.includeTableofContents? [
         "## Table of Contents",
        "[Description](#description)",
        "[Installation](#installation)",
        "[Usage](#usage)",
        "[Credits](#credits)",
        "[License](#license)",
        "[Contributions](#contributions)",
        "[Tests](#tests)",
        "[Questions](#questions)",
    ] :  [
        "## Table of Contents ",
        "N/A "
    ]

    const aboveTableofContentsArr = [
        `${props.licenseBadge}${props.licenseLink}`,
        `# ${props.title} `,
        "## Description ",
        `${props.description} `
    ]

    const belowTableofContentsArr = [
        "## Installation",
        `${props.installation}`,
        "## Usage", 
        `${props.usage}`,
        "## Credits ",
        `${props.credits} `,
        "## License ",
        props.license ? `This project is covered under the ${props.license} ` : `N/A `,
        "## Contributions ", 
        `${props.contributions} `,
        "## Tests ",
        `${props.tests} `,
        "## Questions ",
        "For any questions regarding this project please contact me at my -",
        `GitHub: [${props.githubUsername}](https://github.com/${props.githubUsername}) `,
        `Email: ${props.email}`

    ]

    const formattedAboveTableofContentsArr = aboveTableofContentsArr.map(item=> <h4 className = {item.includes(props.description) ? "description": ""}>{item}</h4>)
    const formattedTableofContentsArr = tableOfContentsArr.map (item => <div>
        <h4>{item}</h4>
        <br/>
        </div>)
    const formattedBelowTableofContentsArr = belowTableofContentsArr.map (item => <h4>{item}</h4>)

    return (
        <div className="readme--markup">
            <h2 className="readme--markup--title">Readme Markup</h2>
            <div className={props.generatedMarkupUnchanged ? "" : "markup-changed"}>
                    {formattedAboveTableofContentsArr}
                    {formattedTableofContentsArr}
                    {formattedBelowTableofContentsArr}
            </div>
        </div>
    )
}