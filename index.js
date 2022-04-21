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
    ])
    .then((response) => {
        console.log(response)

    }
    );

