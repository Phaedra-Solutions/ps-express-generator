#!/usr/bin/env node
const shell = require('shelljs');
const init = require('./utils/init');
// const chalk = require('chalk');
const { Command } = require('commander');
const data = require('./utils/data');
const packJson = require('../package.json');
const workflows = require('./workflows');
const install = require('./utils/install');
const program = new Command();

/**
 * @description IIFE (this will invoke as soon as it's exxcuted)
 */
(async () => {
	// ##########################  WELCOME ########################## //
	init();


	program.name('@ps-cli/express');

	// Global Options
	program.option('-v, --version', `${packJson.version}`);

	// Help
	program.helpOption('-h, --help', 'Get the help info');
	program.addHelpText('before', `\n`);
	program.addHelpText('after', data.helpInfo);

	// Commads
	program
		.command(`new <name>`)
		.option('-i, --install', 'intsall all dependantcies')
		.description(`Generates a new project`)
		.action( async (name, options) => {
			await workflows.project(name, options.install);
		})


	// Loading all Agrs
	program.parse();
	if (program.opts().version) {
		console.log(packJson.version);
		process.exit(0);
	}

})();