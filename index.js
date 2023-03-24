// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is a brief description of the project?",
        name: "description"
    },
    {
        type: "input",
        message: "Are there any installation instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "Are there any test instructions?",
        name: "test"
    },
    {
        type: "input",
        message: "Is there any usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "Are there any contribution guidelines?",
        name: "guidelines"
    },
    {
        type: "input",
        message: "What license would you like to choose?",
        name: "license"
    }
];

inquirer
    .prompt(questions)
    .then((answers) => {
        const readMeContent = generateMarkdown(answers);
        writeToFile("README.md", readMeContent);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(error) : console.log("Created README!")
    )
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
