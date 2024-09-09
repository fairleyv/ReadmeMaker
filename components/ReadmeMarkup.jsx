import React from "react"
import {useState} from "react"

export default function ReadmeMarkup (props) {

    const tableOfContentsArr = props.includeTableofContents? [
         "## Table of Contents\\n",
        "[Description](#description)\\n",
        "[Installation](#installation)\\n",
        "[Usage](#usage)\\n",
        "[Credits](#credits)\\n",
        "[License](#license)\\n",
        "[Contributions](#contributions)\\n",
        "[Tests](#tests)\\n",
        "[Questions](#questions)\\n",
    ] :  [
        "## Table of Contents\\n ",
        "N/A \\n"
    ]

    const aboveTableofContentsArr = [
        `${props.licenseBadge}${props.licenseLink}\\n`,
        `# ${props.title} \\n`,
        "## Description \\n",
        `\\t ${props.description} \\n`

    ]

    const belowTableofContentsArr = [
        "## installation \\n",
        `${props.installation} \\n`,
        "##usage", 
        `${props.usage} \\n`,
        "## Credits \\n",
        `${props.credits} \\n`,
        "## License \\n",
        props.license ? `This project is covered under the ${props.license} \\n` : `N/A \\n`,
        "## Contributions \\n", 
        `${props.contributions} \\n`,
        "## Tests \\n",
        `${props.tests} \\n`,
        "## Questions \\n",
        "For any questions regarding this project please contact me at my -\\n",
        `GitHub: [${props.githubUsername}](https://github.com/${props.githubUsername}) \\n`,
        `Email: ${props.email}`

    ]

    const formattedAboveTableofContentsArr = aboveTableofContentsArr.map(item=> <h4>{item}</h4>)
    const formattedTableofContentsArr = tableOfContentsArr.map (item => <h4>{item}</h4>)
    const formattedBelowTableofContentsArr = belowTableofContentsArr.map (item => <h4>{item}</h4>)

    return (
        <div className="readme--markup">
            <h2>Readme Markup</h2>
            <div className={props.generatedMarkupChanged ? "markup-changed" : ""}>
                <div>
                    {formattedAboveTableofContentsArr}
                </div>
                <div>
                    {formattedTableofContentsArr}
                </div>
                <div>
                    {formattedBelowTableofContentsArr}
                </div>
            </div>
        </div>
    )
}