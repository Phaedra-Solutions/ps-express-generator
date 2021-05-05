#!/usr/bin/env node

var shell = require('shelljs');

process.argv = process.argv.slice(2, process.argv.length);

if (process.argv.length === 0 ){
	shell.echo('Name of the project is required "npx express-generator <name>"');
	shell.exit(1);
}

// Argument String
let argsStr = '';
for (let i = 0; i < process.argv.length; i++) {
	console.log('[ARGUMENTS]', process.argv[i])
	argsStr += ` ${process.argv[i]}`;
}

// Making Project
if (shell.exec(`npx express-generator ${argsStr} --git`).code !== 0) {
	shell.echo('Error: Git commit failed');
	shell.exit(1);
}

// Making directories
if (process.argv[0]) {
	shell.cd(process.argv[0])
}

// middleware
shell.mkdir('middleware');
shell.cd('middleware');
shell.touch('index.js');
shell.cd('..');

// models
shell.mkdir('models');
shell.cd('models');
shell.touch('index.js');
shell.cd('..');


// services
shell.mkdir('services');
shell.cd('services');
shell.touch('index.js');
shell.cd('..');


// startup
shell.mkdir('startup');
shell.cd('startup');
shell.touch('index.js');
shell.cd('..');


// Helper
shell.mkdir('shared');
shell.cd('shared');
shell.touch('index.js');

shell.mkdir('common');
shell.cd('common');
shell.touch('index.js');
shell.cd('..');

shell.mkdir('helper');
shell.cd('helper');
shell.touch('index.js');
shell.cd('..');

shell.cd('..');

// ENV
shell.touch('.env');

// Initializing git
shell.exec('git init');

// Node Modules
if(shell.exec('npm i').code !== 0) {
	shell.echo('Error: npm i failed');
	shell.exit(1);
}

shell.exit(0);

