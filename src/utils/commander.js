const { Command } = require('commander');
const data = require('./data');
const program = new Command();

// Options
program.option('-i, --install', 'intsall all dependantcies');
program.helpOption('-h, --help', 'Get the help info');
program.addHelpText('before', `\n`);
program.addHelpText('after', data.helpInfo);

// Arguments
program.arguments('<name>')

// Name
program.name('@ps-cli/express');

// Loading all Agrs
program.parse(process.argv);
data.appName = program.args[0];


module.exports = program;