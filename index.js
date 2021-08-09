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
            choices: ['Apache 2.0 License', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0'],
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
        let licenseBadge = '';

        if (response.license == 'Apache 2.0 License') {
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (response.license == 'GNU GPL v3') {
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        } else if (response.license == 'GNU GPL v2') {
            licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
        } else if (response.license == 'GNU AGPL v3') {
            licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        } else if (response.license == 'GNU LGPL v3') {
            licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
        } else if (response.license == 'IBM Public License Version 1.0') {
            licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
        } else if (response.license == 'ISC License (ISC)') {
            licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        } else if (response.license == 'The MIT License') {
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else if (response.license == 'Mozilla Public License 2.0') {
            licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        }

        fs.writeFile('./generated README/README.md',
            `${licenseBadge}

# ${response.title}
            
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
err ? console.error(err) : console.log('README successfuly generated'))
    }
    );