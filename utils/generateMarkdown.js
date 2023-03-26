// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case "MIT":
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
      break;
    
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache_2.0)`;
      break;
    
    case "Eclipse Public License":
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-blue.svg)](https://opensource.org/licenses/EPL_1.0)`;
      break;
    
    case "Mozilla Public License 2.0":
      return `[![License](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    
    case "The Unlicense":
      return `[![License](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://opensource.org/licenses/unlicense.org/)`;
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch(license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/apache-2-0/)`;
      break;
    
    case "Eclipse Public License":
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-blue.svg)](https://opensource.org/licenses/EPL_1.0)`;
      break;
    
    case "Mozilla Public License 2.0":
      return `[![License](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    
    case "The Unlicense":
      return `[![License](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://opensource.org/licenses/unlicense.org/)`;
      break;
    default:
      return "";
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title: ${data.title}\n

  ## Table of Contents:
  - [Description](#description)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Author / Contributors](#author(s))
  
  ### Description:\n
  - ${data.description}\n

  ### Screenshots: \n
  - []()
  - [Github Live Site]()

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
  ${renderLicenseBadge(data.license)}\n
  
  
  
  
  
  
  `;
}

module.exports = generateMarkdown;
