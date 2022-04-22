// allows usage of node package functions. we use import over require for compatibility purposes with node fetch
import fs from "fs";
import inquirer from 'inquirer';
import fetch from 'node-fetch';

// arrays for license + badge and technology used prompts
const licenseArr = ["cc0-1.0", "mit", "mpl-2.0", "apache-2.0", "gpl-3.0", "agpl-3.0"]
const badgeArr = ["![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)", "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)", "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)", "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)", "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)", "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)",];
const techUsed = ["- HTML", "- CSS", "- Javascript", "- Third-Party APIs", "- Node.js", "- VS Code", "- Sublime Text", "- Git/Github", "- Chrome Developer Tools"];

// pulls up prompts for the user and uses those responses in the .then promise
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
            name: 'technologies',
            type: 'checkbox',
            message: 'Please enter technologies used:',
            choices: techUsed,
        },
        {
            name: 'demo',
            type: 'input',
            message: 'Please enter the directory of the demo relative to index.js or demo URL:',
        },
        {
            name: 'test',
            type: 'input',
            message: 'Please enter test instructions:',
        },
        {
            name: 'license',
            type: 'list',
            message: "Please select which license you would like to use (Use arrows + enter). Don't forget to update your info into the license!",
            choices: licenseArr,
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
        {
            name: 'credits',
            type: 'input',
            message: 'Please enter people to credit:',
        },
    ])
    .then((response) => {
        console.log(response);

        // use github api for copy and pasting the selected license license 
        const githubApi = 'https://api.github.com/licenses/';

        // function to organize the response data and create the readme file
        // we use async and await in order to be able to use the fetch function in node
        var genReadme = async () => {
            console.log(`${githubApi}${response.license}`);

            // fetches the github license information and saves it as consts
            const apiResponse = await fetch(`${githubApi}${response.license}`);
            const apiData = await apiResponse.json();

            console.log(apiData);
            console.log(apiData);
            console.log(response.technologies);

            // formats technologies used response in order to format nicely on markdown
            let newTechArr = response.technologies.join('<br>\r\n');

            console.log("new tech arr " + newTechArr);

            // creates the readme files using template literal and data that we have gathered from the user
            // on line 177, badgeArr[licenseArr.indexOf(response.license)] -> gets the index number of the chosen license from licenseArr and pulls the corresponding badge image from the same index number of badgeArr
            fs.writeFile(`${response.title}.md`, `# ${response.title}        
<br>

${badgeArr[licenseArr.indexOf(response.license)]}

<br>

## <ins> Table of Contents: </ins>

- [Questions](#-questions-)
- [Description](#-description-)
- [Installation](#-installation-)
- [Usage](#-usage-)
- [Technologies and Programs Used](#-technologies-and-programs-used-)
- [Demonstration](#-demonstration-)
- [Tests](#-tests-)
- [Links](#-links-)
- [Credits](#-credits-)
- [License](#-license-)
<br><br>  

## <ins> Questions? </ins>

### By [${response.username}](https://github.com/${response.username})
### Email: ${response.email}
<br><br>

## <ins> Description: </ins>
        
${response.description}
<br><br>      

## <ins> Installation: </ins>
        
${response.install}
<br><br>

## <ins> Usage: </ins>
        
${response.usage}
<br><br>    

## <ins> Technologies and Programs Used: </ins>
        
${newTechArr}
<br><br> 
        
## <ins> Demonstration: </ins>
        
![Demonstration](${response.demo})
<br><br>   

## <ins> Tests: </ins>

${response.test}

## <ins> Links: </ins>
        
- [Github Deployed Website](${response.deployWeb})
- [Github Repository](${response.deployRepo})
<br><br>     

## <ins> Credits: </ins>

Special Thanks to: 
${response.credits}
<br><br>

## <ins> License: </ins>


<br>

${apiData.body}
`, (err) => // if there is an error, error will be outputed, but if the program goes through everything smoothly, it will log "Created README!"
                err ? console.error(err) : console.log("Created README!")

            );
        }
        // calls the function for generating the readme
        genReadme();
    })