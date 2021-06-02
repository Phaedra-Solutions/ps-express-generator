const chalk = require('chalk');
const { Command } = require('commander');
const { timeout } = require('.');
const data = require('./data');
const packJson = require('../../package.json');
const program = new Command();

// Options
program.option('-i, --install', 'intsall all dependantcies');
program.option('-v, --version', `${packJson.version}`);
program.helpOption('-h, --help', 'Get the help info');
program.addHelpText('before', `\n`);
program.addHelpText('after', data.helpInfo);

// Arguments
program.arguments('<name>')

// Name
program.name('@ps-cli/express');

// Loading all Agrs
program.parse(process.argv);

if (program.opts().version) {
	console.log(packJson.version);
	process.exit(0);
}

if (program.args[0]) {
	data.appName = program.args[0];
} else {
	console.log(`\n${chalk.yellow(`WARNING: No name given, giving default name`)}: ${chalk.white.bold.inverse(` ${data.appName} `)}`);
	console.log(`\n	$ npx @ps-cli/express [options] <name>\n`);
	timeout(2);
}

module.exports = program;