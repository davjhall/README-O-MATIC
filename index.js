// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer
  .prompt([
{
    type: `input`,
    message: `What is the title of your project?`,
    name: `title`,
},

{
    type: 'input',
    message: 'Provide a short description of what your project does?',
    name: 'Description',
  },
  {
    type: 'input',
    message: 'What are the steps to install your project?',
    name: 'Steps',
  },
 {
    type: 'input',
    message: 'What are some examples and instructions for use?',
    name: 'Examples',
  },
  {
    type: 'input',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
    name: 'Collabs',
    default: 'N/A'
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'Username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email',
  },
])

.then((response) =>
  response.confirm === response.input
    ? console.log('Success!')
    : console.log('You the man Juug')
);


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
