import React from "react"
import {useState} from "react"

export default function ReadmeMarkup (props) {

    const tableOfContentsArr = [
         "## Table of Contents\n",
        "[Description](#description)\n",
        "[Installation](#installation)\n",
        "[Usage](#usage)\n",
        "[Credits](#credits)\n",
        "[License](#license)\n",
        "[Contributions](#contributions)\n",
        "[Tests](#tests)\n",
        "[Questions](#questions)\n",
    ]

    const formattedTableofContentsArr = tableOfContentsArr.map (item => <pre>{item}</pre>)

    return (
        <div className="readme--markup">
            {/* // ${props.licensebadge}${props.licenseLink}\n */}
                <pre>
                    {`# ${props.title}`} \n
                    </pre>

                <pre>
                    {`## Description`} \n
                </pre>

                <pre>
                    \t{` ${props.description}`} \n
                </pre>

            {props.includeTableofContents && 
            <div>
                {formattedTableofContentsArr}
            </div>
            } 
            {!props.includeTableofContents && 

                <pre> 
                    `## Table of Contents\n 
                    N/A\n`
                </pre>
                }

                <pre>
                ## Installation\n
                </pre>
                <pre>
                {props.installation} \n
                </pre>
                <pre>
                ## Usage \n
                </pre>
                <pre>
                {props.usage} \n
                </pre>
                <pre>
                ## Credits \n
                </pre>
                <pre>
                {props.credits} \n
                </pre>
                <pre>
                ## License \n
                </pre>
                <pre>
                {props.license ? `This project is covered under the ${props.license}` : `N/A`} \n 
                </pre>
                <pre>
                ## Contributions \n
                </pre>
                <pre>
                {props.contributions} \n
                </pre>
                <pre>
                ## Tests \n
                </pre>
                <pre>
                {props.tests}\n
                </pre>
                <pre>
                ## Questions \n
                </pre>
                <pre>
                For any questions regarding this project please contact me at my -\n
                GitHub: [{props.username}]`(https://github.com/${props.githubUsername})` \n
                Email: {props.email}
                </pre>
        </div>
    )
}