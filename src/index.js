#!/usr/bin/env node
const init = require('./utils/init');
const { Command } = require('commander');
const data = require('./utils/data');
const packJson = require('../package.json');
const jsWorkflows = require('./workflows/js');
const chalk = require('chalk');
const program = new Command();
const store = require('./utils/store');

/**
 * @description IIFE (this will invoke as soon as it's exxcuted)
 */
(async () => {
	program.name('@ps-cli/express');

	// Help
	program.helpOption('-h, --help', 'Get the help info');
	program.addHelpText('before', `\n`);
	program.addHelpText('after', data.helpInfo);

	// Global Options
	program
		.option('-v, --version', `${packJson.version}`)
		.description('Gives the verison of CLI')
		.action((options) => {
			if (options.version) {
				console.log(`${chalk.yellow(`version`)}: ${packJson.version}`);
				process.exit(0);
			}
		})


	// New Project Sequence
	program
		.command(`new <name>`)
		.option('-i, --install', 'intsall all dependantcies')
		.option('-g, --git', 'initialize git')
		.helpOption('-h, --help', 'Help in options')
		.description(`Generates a new project`)
		.action( async (name, options) => {
			// WELCOME
			await init();
			store.set({ vars: { name }, ...options });
			await jsWorkflows.new();
		})

	// Component Generatiion
	const generate = program
		.command('generate')
		.alias('g')

	// Route
	generate
		.command('route <name>')
		.alias('r')
		.option('-c, --crud', 'Generates CRUDS as well')
		.helpOption('-h, --help', 'Help in options')
		.description('Generate a route')
		.action(async (name, options) => {
			store.set({ vars: { name }, ...options })
			await jsWorkflows.route();
		})

	generate
		.command('service <name>')
		.alias('s')
		.helpOption('-h, --help', 'Help in options')
		.description('Generate a service')
		.action(async (name, options) => {
			console.log('[SERVICE]');
		})

	program.parse();


	if (program.args.length === 0) {
		program.outputHelp();
	}

})();


module.exports = {
	program
}