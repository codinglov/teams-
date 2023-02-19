const Manager = require('./lib/Manager');
const Engineer = require('./lib/senior engineer');
const JuniorEngineer = require('./lib/JuniorEngineer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname,'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = re
