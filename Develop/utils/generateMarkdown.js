// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
## Description  
${data.description}  
## Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Credits](#credits)  
  - [License](#license) 
  - [Badges](#badges)  
  - [Features](#features)  
  - [How to Contribute](#how-to-contribute)  
## Installation  
${data.installation}  
## Usage  
${data.usage}  
      ![alt text](assets/images/screenshot.png)  
## Credits  
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.  
## License  
${data.license}  
## Badges  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)  
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.  
## Features  
If your project has a lot of features, list them here.  
## How to Contribute  
${data.contributing}  
  
`;
}

module.exports = generateMarkdown; //DO NOT CHANGE
