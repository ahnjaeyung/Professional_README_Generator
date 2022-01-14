const licenses = ["Apache License 2.0", "BSD 3-Clause License", "GNU General Public License v3.0", "MIT License", "Mozilla Public License v2.0", "None"]

function renderLicenseBadge(license) {
  if (license === licenses[0]) {
    return "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === licenses[1]) {
    return "[![License: BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === licenses[2]) {
    return "[![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === licenses[3]) {
    return "[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === licenses[4]) {
    return "[![License: Mozilla Public License v2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === licenses[5]) {
    return ""
  }
}

function renderLicenseLink(license) {
  if (license === licenses[0]) {
    return `[${licenses[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenses[1]) {
    return `[${licenses[1]}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === licenses[2]) {
    return `[${licenses[2]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === licenses[3]) {
    return `[${licenses[3]}](https://opensource.org/licenses/MIT)`
  } else if (license === licenses[4]) {
    return `[${licenses[4]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === licenses[5]) {
    return ""
  }
}

function renderLicenseSection(license) {
  if (license === licenses[0]) {
    return `Read about ${licenses[0]}:`
  } else if (license === licenses[1]) {
    return `Read about ${licenses[1]}:`
  } else if (license === licenses[2]) {
    return `Read about ${licenses[2]}:`
  } else if (license === licenses[3]) {
    return `Read about ${licenses[3]}:`
  } else if (license === licenses[4]) {
    return `Read about ${licenses[4]}:`
  } else if (license === licenses[0]) {
    return ""
  }
}

function generateMarkdown(data) {
  return `# ${data.title}  
## Badges  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)  
  ${renderLicenseBadge(data.license)}  
## Description  
${data.description}  
## Table of Contents  
If your README is long, add a table of contents to make it easy for users to find what they need.  
  - [Badges](#badges)  
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Credits](#credits)  
  - [License](#license)  
  - [How to Contribute](#how-to-contribute)  
  - [Tests](#tests)  
  - [Questions](#questions)  
## Installation  
${data.installation}  
## Usage  
${data.usage}  
## Credits  
${data.credits}
## License  
${renderLicenseSection(data.license)}  
${renderLicenseLink(data.license)}  
## How to Contribute  
${data.contributing}  
## Tests  
${data.tests}  
## Questions
For any questions, reach me at: [${data.username}](https://github.com/${data.username}),  
or email me at: ${data.email}.
`;
}

module.exports = generateMarkdown;