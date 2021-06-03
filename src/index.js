#!/usr/bin/env node
const init = require('./utils/init');
const { Command } = require('commander');
const data = require('./utils/data');
const packJson = require('../package.json');
const jsWorkflows = require('./workflows/js');
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
		.option('-g, --git', 'initialize git')
		.helpOption('-h, --help', 'Help in options')
		.description(`Generates a new project`)
		.action( async (name, options) => {
			await jsWorkflows.new(name, options);
		})


	// Loading all Agrs
	program.parse();
	if (program.opts().version) {
		console.log(packJson.version);
		process.exit(0);
	}

})();


module.exports = {
	program
}