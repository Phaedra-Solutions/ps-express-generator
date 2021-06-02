#!/usr/bin/env node
const shell = require('shelljs');
const writer = require('./writer');
const data = require('./data');
const replace = require('replace-in-file');
const init = require('./utils/init');
const log = console.log;

/**
 * @description IIFE (this will invoke as soon as it's exxcuted)
 */
(() => {
	// ##########################  WELCOME ########################## //
	init();

	// ##########################  ARGS PROCESSING ########################## //
	let dependancies = ['cookie-parser debug dotenv express jsonwebtoken morgan swagger-ui-express'];
	let devDependancies = ['nodemon prettier'];
	const templatingEngines = ['--ejs', '--view', '--pug', '--hbs', '--hogan', '--dust', '--hjs', '--jade', '--twig', '--vash'];
	const db_args = ['--mongo', '--mariadb', '--postgresql'];
	const db = {
		'MONGO': '--mongo',
		'MARIA': '--mariadb',
		'POSTGRESQL': '--postgresql'
	}

	process.argv = process.argv.slice(2, process.argv.length);

	if (process.argv.length === 0) {
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

	shell.mkdir(process.argv[0]);
	shell.cd(process.argv[0]);

	log("\n");

	// Adding Files
	for (let i = 0; i < data.length; i++) {
		if (data[i].name === 'package.json') {
			writer({
				...data[i], changes: [
					{ "from": "--name--", "to": process.argv[0] }
				]
			}, process.argv[0])
		} else {
			writer({ ...data[i] }, process.argv[0]);
		}
	}

	log("\n\n");

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


	// ########################## ADDING / INSTALLING DEPNEDCIES ########################## //
	shell.exec(`npx add-dependencies ./package.json ${dependancies}`);
	shell.exec(`npx add-dependencies ./package.json ${devDependancies} --save-dev`);

	shell.exit(0);
})();