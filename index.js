// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const answers = require('./answers')
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
    type: 'list',
    message: 'Which license would you like to add?',
    name: 'lic',
    choices: ['BSD', 'MIT', 'GPL'],

  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'Username',
  },
  
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
])


.then((response) =>{

  answers(response);
  response.confirm === response.input
  ? console.log('Success!')
  : console.log('')
}
);



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
