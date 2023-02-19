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
    
  }
}
