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
    inquirer.createPromptModule([
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
          name: 'TeamLeadsOfficeNumber',
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
      const TeamLead   
    })
  }
}
