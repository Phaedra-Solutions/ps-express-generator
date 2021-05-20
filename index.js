#!/usr/bin/env node

const shell = require('shelljs');
const replace = require('replace-in-file');
const changes = require('./changes');

const platingEngines = ['--ejs', '--view', '--pug', '--hbs', '--hogan', '--dust', '--hjs', '--jade', '--twig', '--vash'];

process.argv = process.argv.slice(2, process.argv.length);

if (process.argv.length === 0 ){
	shell.echo('Name of the project is required "npx express-generator <name>"');
	shell.exec(`npx express-generator -h`);
	shell.exit(1);
}

if (process.argv[0] === '-h') {
	shell.exec(`npx express-generator -h`);
	shell.exit(1);
}

// Argument String
let argsStr = '';
for (let i = 0; i < process.argv.length; i++) {
	argsStr += ` ${process.argv[i]}`;
}

// Setting no-view as default if no view is set
let hasView = false;
for (let i = 0; i < platingEngines.length; i++) {
	if (argsStr.includes(platingEngines[i])) {
		hasView = true;
	}
}

// Making Project
if (shell.exec(`npx express-generator ${argsStr} ${!hasView ? '--no-view': ''} --git`).code !== 0) {
	shell.echo('Error: Express generatoe failed');
	shell.exit(1);
}

// Making directories
if (process.argv[0]) {
	shell.cd(process.argv[0])
}

// Making src folder
shell.mkdir('src');

// Moving data to src
shell.exec('mv routes src/@routes');
shell.exec('mv app.js src/app.js');


// Moving in src
shell.cd('src');


// middleware
shell.mkdir('@middleware');

// models
shell.mkdir('@models');
shell.cd('@models');
shell.touch('index.js');
shell.cd('..');


// services
shell.mkdir('@services');
shell.cd('@services');
shell.touch('index.js');
shell.cd('..');


// startup
shell.mkdir('@startup');
shell.cd('@startup');
shell.touch('index.js');
shell.cd('..');


// Helper
shell.mkdir('@shared');
shell.cd('@shared');
shell.touch('index.js');

shell.mkdir('common');
shell.cd('common');
shell.touch('index.js');
shell.cd('..');

shell.cd('..');
shell.cd('..');


// ENV
shell.touch('.env');

// .vsCode Initialization
shell.mkdir('.vscode');
shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/vscode-settings/master/.vscode/settings.json --output .vscode/settings.json')


// Node Modules
if(shell.exec('npm i').code !== 0) {
	shell.echo('Error: npm i failed');
	shell.exit(1);
}

// Installing jsonwebtoken
shell.exec('npm i jsonwebtoken');

// Installig swagger
shell.exec('npm install swagger-ui-express');

// Makeing updates in files
for (let i = 0; i < changes.length; i++) {
	replace.sync(changes[i])
}

// Adding and deleteing files
shell.exec('pwd');
shell.rm(['src/@routes/index.js', 'src/@routes/users.js']);
shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/routes/index.js --output src/@routes/index.js');
shell.mkdir('src/@routes/default');
shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/routes/default/controller.js --output src/@routes/default/controller.js');
shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/routes/default/routes-config.js --output src/@routes/default/routes-config.js');
shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/shared/common/helper.js --output src/@shared/common/helper.js');
shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/middleware/authenticated.js --output src/@middleware/authenticated.js');
shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/middleware/authorized.js --output src/@middleware/authorized.js');



shell.exit(0);
