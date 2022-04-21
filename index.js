const fs = require("fs");
const inquirer = require('inquirer');



inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter GitHub username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter a title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a description:',
            name: 'description',
        },

        {
            type: 'input',
            message: 'Please enter installation instructions:',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Please enter usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please enter credits:',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Please enter test instructions:',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Please select which license you would like to use:',
            name: 'license',
            choices: ["1) Public Domain & Equivalents", "2) Permissive License", "3) Copyleft", "4) Noncommercial License", "5) Proprietary License", "6) Confidential/Classified"]
        },
    ])
    .then((response) => {
        console.log(response)

    }
    );







    // inquirer
    // .prompt([
    //     {
    //         type: 'input',
    //         message: 'What is your user name?',
    //         name: 'username',
    //     },
    //     {
    //         type: 'password',
    //         message: 'What is your password?',
    //         name: 'password',
    //     },
    //     {
    //         type: 'password',
    //         message: 'Re-enter password to confirm:',
    //         name: 'confirm',
    //     },
    // ])
    // .then((response) => {
    //     console.log(response)
    //     response.confirm === response.password
    //         ? console.log('Success!')
    //         : console.log('You forgot your password already?!')
    // }
    // );
