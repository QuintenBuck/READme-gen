// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// var writeToFile = require('writeToFile');
inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: "What is the title of your project?"
      }, 
      {

      type: 'input',
      name: 'technologies',
      message: "What technologies did you use?",
      },
      { 

      type: 'input',
      name: 'installation',
      message:"How can your project be insalled?"
     },
     {  

     type: 'input',
     name: 'use',
     message:"How can your project be used?"
     }])

  .then((answers) => {
      console.log(answers.name)
      console.log(answers.technologies)
      console.log(answers.installation)
      console.log(answers.use)
      console.log("Here is the info")


      fs.writeFile(createFile, JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
// 
// const fs = require('fs');

// fs.writeFile('Readme.md', answers, (error, data) => {
//   if (error) throw error;
//   console.log('Success')
// }
// // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
