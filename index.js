// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {type: 'input',
        name: 'about',
        message: 'What is your project about?',
        },
        {type: 'input',
        name: 'techUsed',
        message: 'What technologies did you use in your project?',
        },
        {type: 'input',
        name: 'installation',
        message: 'What steps should users take to install your project?',
        },
        {type: 'input',
        name: 'usage',
        message: 'How should your project be used?',
        },
        {type: 'input',
        name: 'credits',
        message: 'Did you have any collaborators?',
        },
    ])
}

const generateReadme = (answers) => 
`# README

## ABOUT
${answers.about}

## Technologies Used
${answers.techUsed}

## Installation
${answers.installation}

## Usage
${answers.usage}

##Collaborators
${answers.credits}
`


// TODO: Create a function to initialize app
function init() {
    console.log("Thank you for using the README Generator!")
    questions()
    .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
