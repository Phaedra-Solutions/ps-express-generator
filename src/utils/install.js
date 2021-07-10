const chalk = require('chalk');
const shell = require('shelljs');
const ask = require('./ask');
const ora = require('ora');
const store = require('./store');

const spinner = ora({ text: '' })

module.exports = async () => {
  let install = !!store.get('install');
  const vars = store.get('vars');
  let {name} = vars;

  // Confirming
	if (!install) {
		const _intall = await ask({name: 'install', message: 'Do want to install dependancies ?', hint: '(yes|no)', initial: 'no', choices: ['yes', 'no'] });
		if (_intall === 'yes') install = true;
	}

	// ########################## ADDING / INSTALLING DEPNEDCIES ########################## //
	if (install) {
		console.log(`\n ${chalk.yellow(`INSTALLING DEPENDANCIES 🚀`)}\n `)
    shell.cd(name)
    spinner.start(`${chalk.yellow(`Installing dependantcies...`)}`);
		shell.exec(`npm i`);
    spinner.succeed(`${chalk.green(`Dependantcies Intalled Successfully`)}`);
    shell.cd('..')
	}
}