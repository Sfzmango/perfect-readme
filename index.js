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
    ])
    .then((response) => {
        console.log(response)

    }
    );
