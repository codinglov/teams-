const Manager = require('./lib/Manager');
const Engineer = require('./lib/senior engineer');
const JuniorEngineer = require('./lib/JuniorEngineer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname,'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

console.log(
    '\n Welcome to Team Profile generator! \n You can use `npm run reset` to reset the dist/folder\n'
);

function appMenu() {
  function createTeamLead() {
    console.log('Create your team');
    inquirer.prompt([
        {
          type:'input',
          name:'TeamLeadName',
          message:"What is your Team Lead's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;  
            }
            return 'Please enter at least two characters.';
          },  
        },
        {
          type: 'input',
          name: 'TeamLeadId',
          message: "What is your Team Lead's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;    
            }
            return 'Please enter at least six numbers.';
          },  
        },
        {
          type: 'input',
          name: 'TeamLeadEmail',
          message: "What is the Team Lead's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
             return true;   
            }
            return 'Please enter a valid email address.';
          },  
        },
        {
          type: 'input',
          name: 'TeamLeadOfficeNumber',
          message: "What is the team lead's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;  
            }
            return 'Please enter at least then numbers?';
          },
        },
    ])
    .then((answers) => {
      const TeamLead = new TeamLead(
        answers.TeamLeadName,
        answers.TeamLeadId,
        answers.TeamLeadEmail,
        answers.TeamLeadOfficeNumber
      );
      teamMembers.push(manager);
      idArray.push(answers.TeamLeadId);
      createTeam();  
    });
  }

  function create Team() {
    inquirer.prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'Add team member.',
          choices: [
            'Senior Engineer',
            'Junior Engineer',
            'Intern',
            "No more team members to add",
          ],

        },
    ])
    .then((userChoice) => {
      switch (userChoice.memmberChoice) {
        case 'SeniorEngineer':
          addSeniorEngineer();
          break;
        case 'JuniorEngineer':
          addJuniorEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        default:
          buildTeam();          
        };
      });
 }
  function addSeniorEngineer() {
   inquirer.prompt([
        {
           type: 'input',
           name: 'SeniorEngineer',
           message: "What is the Senior Engineers name?",
           validate: (answer) => {
             if (answer !=='') {
               return true; 
             }
             return 'Please enter at least two characters.';
           }, 
        },
        {
            type:'input',
            name:'SeniorEngineerId',
            message: "What is the Senior Engineer's Id?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                if (idArray.includes(answer)) {
                  return 'This ID is already taken. Please use a different number.';  
                } else {
                  return true;  
                }
              }
              return 'Please enter at least six numbers.';
            }, 
          },
          {
            type: 'input',
            name: ' SeniorEngineerEmail',
            message: "What is the Senior Engineer's Email?",
            validate: (answer) => {
              const pass = answer.match(/\S+@\S+\.\S+/);
              if (pass) {
                return true;
              }
              return 'Please enter a valid email address.';
            },
        
        },
        
        function addJuniorEngineer() {
            inquirer.prompt([
                 {
                    type: 'input',
                    name: 'JuniorEngineer',
                    message: "What is the Junior Engineers name?",
                    validate: (answer) => {
                      if (answer !=='') {
                        return true; 
                      }
                      return 'Please enter at least two characters.';
                    }, 
                 },
                 {
                     type:'input',
                     name:'JuniorEngineerId',
                     message: "What is the Junior Engineer's Id?",
                     validate: (answer) => {
                       const pass = answer.match(/^[1-9]\d*$/);
                       if (pass) {
                         if (idArray.includes(answer)) {
                           return 'This ID is already taken. Please use a different number.';  
                         } else {
                           return true;  
                         }
                       }
                       return 'Please enter at least six numbers.';
                     }, 
                   },
                   {
                     type: 'input',
                     name: ' JuniorEngineerEmail',
                     message: "What is the Junior Engineer's Email?",
                     validate: (answer) => {
                       const pass = answer.match(/\S+@\S+\.\S+/);
                       if (pass) {
                         return true;
                       }
                       return 'Please enter a valid email address.';
                     },
                 
                 },
    

   

  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is the intern's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least three characters.';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is the intern's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'This ID is already taken. Please enter a different number.';
              } else {
                return true;
              }
            }
            return 'Please enter at least six characters.';
          },
        },
   ])
   .then((answers) => {
     const intern = new Intern(
        answers.internName,
        answers.InternId,
        answers.internEmail,
        answers.internSchool
     );
     teamMembers.push(intern);
     idArray.push(answers.internId);
     createTeam();
   });  
} 

function buildTeam() {

    if (!)fs.existsSync(DIST_DIR){
      fs.mkdirSync(DIST_DIR);  
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }
  
  createManager();
}

a

    })
  }
}
