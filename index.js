import fs from "fs";
import inquirer from 'inquirer';
import fetch from 'node-fetch';

const licenseArr = ["cc0-1.0", "mit", "mpl-2.0", "apache-2.0", "gpl-3.0", "agpl-3.0"]

const techUsed = ["HTML", "CSS", "Javascript", "Node.js", "VS Code", "Sublime", "Git/Github", "Chrome Developer Tools"];

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
            type: 'checkbox',
            message: 'Please enter technologies used:',
            choices: techUsed,
        },
        {
            name: 'demoGif',
            type: 'input',
            message: 'Please enter the directory of the demo gif relative to index.js:',
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
            message: 'Please enter people to credit followed by their URL:',
        },
    ])
    .then((response) => {
        console.log(response);

        const githubApi = 'https://api.github.com/licenses/';

        let licenseBody = "";

        var genReadme = async () => {
            console.log(`${githubApi}${response.license}`);
            const apiResponse = await fetch(`${githubApi}${response.license}`);
            const apiData = await apiResponse.json();
            console.log(apiData);
            licenseBody = apiData.body;
            console.log(licenseBody);
            fs.writeFile(`${response.title}.md`, `# ${response.title}
<br><br>

## <ins> Table of Contents: </ins>

- [Questions](#-questions-)
- [Description](#-description-)
- [Installation](#-installation-)
- [Usage](#-usage-)
- [Technologies and Programs Used](#-technologies-and-programs-used-)
- [Demonstration](#-demonstration-)
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
        
${response.technologies}
<br><br> 
        
## <ins> Demonstration: </ins>
        
![Demonstration](${response.demoGif})
<br><br>   

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
${licenseBody}
`, (err) =>
                err ? console.error(err) : console.log("Created README!")

            );
        }

        genReadme();
    })