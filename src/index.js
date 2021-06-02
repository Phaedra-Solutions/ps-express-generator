#!/usr/bin/env node
const shell = require('shelljs');
const writer = require('./writer');
const data = require('./utils/pathFinder');
const init = require('./utils/init');
const cli = require('./utils/commander');
const { appName, dependancies, devDependancies } = require('./utils/data');
const chalk = require('chalk');

/**
 * @description IIFE (this will invoke as soon as it's exxcuted)
 */
(async () => {
	// ##########################  WELCOME ########################## //
	init();

	// ##########################  ARGS PROCESSING ########################## //
	const flags = cli.opts();

	// ##########################  GENERATING PROJECT ########################## //
	shell.mkdir(appName);
	shell.cd(appName);

	for (let i = 0; i < data.length; i++) {
		if (data[i].name === 'package.json') {
			writer({
				...data[i], changes: [
					{ "from": "--name--", "to": appName }
				]
			}, process.argv[0])
		} else {
			writer({ ...data[i] }, appName);
		}
	}

	// ########################## ADDING / INSTALLING DEPNEDCIES ########################## //
	if (flags.install) {
		console.log(`\n ${chalk.yellow(`INSTALLING DEPENDANCIES 🚀`)}\n `)
		shell.exec(`npm i ${dependancies}`);
		shell.exec(`npm i ${devDependancies} --save-dev`);	
	} else {
		console.log(`\n${chalk.yellow(`ADDING DEPENDANCIES 🏄🏻‍♂️`)}\n `)
		shell.exec(`npx add-dependencies ./package.json ${dependancies}`);
		shell.exec(`npx add-dependencies ./package.json ${devDependancies} --save-dev`);
	}

	shell.exit(0);
})();