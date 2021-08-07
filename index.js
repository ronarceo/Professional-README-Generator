const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide a brief description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions for your project?',
            name: 'installation',
        },
        {
            type: 'input' ,
            message: 'Provide examples and instructions for use of your project.',
            name: 'usage',
        },
        {
            type: 'input' ,
            message: 'List your collaborators or third party assets used if there are any.',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Provide tests for your project and how to run them.',
            name: 'tests',
        },
        {
            type: 'list' ,
            message: 'Choose your license',
            choices: [],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }
    ])
    .then((response) => {
        fs.writeFile('README.md',
            `# ${response.title}
            
            ## Description
            ${response.description}

            ## Table of Contents
            
            ## Installation
            ${response.installation}
            
            ## Usage
            ${response.usage}
            
            ## License
            ${response.license}
            
            ## Contributing
            ${response.contributions}
            
            ## Tests
            ${response.tests}
            
            ## Questions
            Github: github.com/${response.username}
            Email: ${response.email}`, (err) =>
            err ? console.error(err) : console.log('success'))
    }
    );