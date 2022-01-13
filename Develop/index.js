// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter the project title.",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of the project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter any installation instructions for the project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please enter any usage information for the project.",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter any contribution guidelines for the project.",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please enter any test instructions for the project.",
        name: "tests"
    },
    {
        type: "list",
        message: "Please choose a license for the project",
        choices: ["Apache License 2.0", "BSD 3-Clause License", "GNU General Public License v3.0", "MIT License", "Mozilla Public License v2.0", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email"
    }
];
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    var markdownStr = writeToFile(answers);
    console.log(markdownStr);
    fs.writeFile('projectREADME.md', markdownStr,
        (err) => {
            if (err) {
                console.log(err);
            }
            console.log("Successful!");
        })
})

// TODO: Create a function to write README file
function writeToFile(data) {
    return generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
// init();
