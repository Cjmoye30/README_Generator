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
  return `
  # Project Title: ${data.title}\n

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Author / Contributors](#author(s))
  
  ### Description:\n
  - ${data.description}\n

  ### Installation:\n
  - ${data.instructions}\n
  - ${data.installation}\n
  - ${data.guidelines}\n

  ### Usage:\n
  - ${data.usage}\n

  ### Tests
  - ${data.test}

  ### Author(s):\n
  - Github Username: ${data.username}\n
  - Email: ${data.email}\n

  ### License:
  - ${data.license}\n
  `;
}

module.exports = generateMarkdown;
