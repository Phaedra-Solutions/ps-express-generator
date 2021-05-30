#!/usr/bin/env node

const shell = require('shelljs');
const writer = require('./writer');
const data = require('./data.json');

// ##########################  ARGS PROCESSING ########################## //

const templatingEngines = ['--ejs', '--view', '--pug', '--hbs', '--hogan', '--dust', '--hjs', '--jade', '--twig', '--vash'];
const db_args = ['--mongo', '--mariadb', '--postgresql'];
const db = {
	'MONGO': '--mongo',
	'MARIA': '--mariadb',
	'POSTGRESQL': '--postgresql'
}

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
let selectedDb;
for (let i = 0; i < process.argv.length; i++) {
	if (templatingEngines.includes(argsStr[i])) {
		hasView = true;
	}
	if (db_args.includes(process.argv[i])) {
		selectedDb = process.argv[i];
	}
}


// ##########################  GENERATING PROJECT ########################## //

// Making Project
if (shell.exec(`npx express-generator ${argsStr} ${!hasView ? '--no-view': ''} --git`).code !== 0) {
	shell.echo('Error: Express generatoe failed');
	shell.exit(1);
}

// Making directories
if (process.argv[0]) {
	shell.cd(process.argv[0])
}

// .vsCode Initialization for the https://github.com/mustafasheikh1/vscode-settings
shell.mkdir('.vscode');
shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/vscode-settings/master/.vscode/settings.json --output .vscode/settings.json')


// // Adding and deleteing files
// shell.rm(['src/@routes/index.js', 'src/@routes/users.js']);
// shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/routes/index.js --output src/@routes/index.js');
// shell.mkdir('src/@routes/default');
// shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/routes/default/controller.js --output src/@routes/default/controller.js');
// shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/routes/default/routes-config.js --output src/@routes/default/routes-config.js');
// shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/shared/utils/index.js --output src/@shared/utils/index.js');
// shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/middleware/authenticated.js --output src/@middleware/authenticated.js');


for (let i = 0; i < data.length; i++) {
	writer(data[i].name, data[i].src, data[i].destination);
}


// ##########################  ADDING DB  ########################## //


switch (selectedDb) {
	case db.MONGO: {
		// Mongo DB
		shell.exec('npm i mongoose');
		shell.mkdir('src/@startup/db');
		shell.exec('curl -H \'Cache-Control: no-cache\' https://raw.githubusercontent.com/mustafasheikh1/ps-express-generator/master/content/db/mongo/index.js --output src/@startup/db/index.js');
		replace.sync(
			{
				"files": "src/app.js",
				"from": "// Routes\nrequire('./@routes')(app);",
				"to": "// Routes\nrequire('./@routes')(app);\n// DB\nrequire('./@startup/db')();"
			},
		)
		shell.exec(`echo "db=''"|cat - .env > /tmp/out && mv /tmp/out .env`);
		shell.echo('[MONGO_DB ADDED SUCCESSFULLY]');
	}
} 




shell.exit(0);
