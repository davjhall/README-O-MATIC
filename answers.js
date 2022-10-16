const fs = require('fs');
function answers(response){
    console.log(response)
     const template = 
     `
     #Title <Your Project Title>
     ${response.title}


     
     ## Description
     ${response.Description}


     
     ## Installation
     ${response.Steps}

     

     ## Usage
     ${response.Examples}


     
     ## Contributing 
     ${response.Collabs}

    
     
     ## License
   ![GithubLicense](https://img.shields.io/badge/license-${response.lic}-green.svg)
    ${response.lic}


     
     ## Questions
    If you have any questions you can reach me at: 
     ${response.email}
     https://github.com/${response.Username}
`
     
     console.log(template)
     fs.writeFile('README.md', 
    template,
     function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
    
    
}

module.exports = answers;