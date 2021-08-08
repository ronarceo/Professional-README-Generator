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
            choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'WTFPL', 'Zlib'],
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
            - Installation
            - Usage
            - License
            - Contributing
            - Tests
            - Questions
            
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