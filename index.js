const fs = require("fs");
const inquirer = require('inquirer');

const licenses = ["Public Domain & Equivalents", "Permissive License", "Copyleft", "Noncommercial License", "Proprietary License", "Confidential/Classified"];

inquirer
    .prompt([
        {
            name: 'username',
            type: 'input',
            message: 'Please enter GitHub username:',
        },
        {
            name: 'email',
            type: 'input',
            message: 'Please enter email address:',
        },
        {
            name: 'title',
            type: 'input',
            message: 'Please enter a title:',
        },
        {
            name: 'description',
            type: 'input',
            message: 'Please enter a description:',
        },

        {
            name: 'install',
            type: 'input',
            message: 'Please enter installation instructions:',
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Please enter usage information:',
        },
        {
            name: 'techologies',
            type: 'input',
            message: 'Please enter technologies used:',
        },
        {
            name: 'siteGif',
            type: 'input',
            message: 'Please enter the relative directory of the demo gif:',
        },
        {
            name: 'credits',
            type: 'input',
            message: 'Please enter credits:',
        },
        {
            name: 'test',
            type: 'input',
            message: 'Please enter test instructions:',
        },
        {
            name: 'license',
            type: 'list',
            message: 'Please select which license you would like to use (Use arrows + enter to select):',
            choices: licenses,
        },
        {
            name: 'deployWeb',
            type: 'input',
            message: "Please enter the deployed website's URL:",
        },
        {
            name: 'deployRepo',
            type: 'input',
            message: "Please enter the repository's URL",
        },

    ])
    .then((response) => {
        console.log(response)
        fs.writeFile(`${response.title}.md`, `#${response.title}
### By ${response.username}
### Email: ${response.email}


## <ins> Table of Contents: </ins>

    - [Description](#-description-)
    - [Installation](#-installation-)
    - [Usage](#-usage-)
    - [Technologies and Programs Used](#-technologies-and-programs-used-)
    - [Site Demonstration](#-site-demonstration-)
    - [Links](#-links-)
    - [Credits](#-credits-)
    - [License](#-license-)
        

## <ins> Description: </ins>
        
${response.description}
        

## <ins> Installation: </ins>
        
${response.install}


## <ins> Usage: </ins>
        
${response.usage}
        

## <ins> Technologies and Programs Used: </ins>
        
${response.technologies}
    
        
## <ins> Site Demonstration: </ins>
        
![Site Demonstration](${response.siteGif})
        

## <ins> Links: </ins>
        
- [Github Deployed Website](${response.deployWeb})
- [Github Repository](${response.deployRepo})
        

## <ins> Credits: </ins>

${response.credits}


## <ins> License: </ins>
        
${response.license}
`, (err) =>
            err ? console.error(err) : console.log("Created README!"))
    }
    );

