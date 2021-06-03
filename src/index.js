#!/usr/bin/env node
const init = require('./utils/init');
const { Command } = require('commander');
const data = require('./utils/data');
const packJson = require('../package.json');
const jsWorkflows = require('./workflows/js');
const chalk = require('chalk');
const program = new Command();

/**
 * @description IIFE (this will invoke as soon as it's exxcuted)
 */
(async () => {
	program.name('@ps-cli/express');

	// Global Options
	program
		.option('-v, --version', `${packJson.version}`)
		.description('Gives the verison of CLI')
		.action(() => {
			console.log(`${chalk.yellow(`version`)}: ${packJson.version}`);
			process.exit(0);
		})


	// Commads
	program
		.command(`new <name>`)
		.option('-i, --install', 'intsall all dependantcies')
		.option('-g, --git', 'initialize git')
		.helpOption('-h, --help', 'Help in options')
		.description(`Generates a new project`)
		.action( async (name, options) => {
			// WELCOME
			init();
			await jsWorkflows.new(name, options);
		})

	// Help
	program.helpOption('-h, --help', 'Get the help info');
	program.addHelpText('before', `\n`);
	program.addHelpText('after', data.helpInfo);	
	program.parse();

})();


module.exports = {
	program
}