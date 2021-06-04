const { dependancies, devDependancies } = require('./data');
const chalk = require('chalk');
const shell = require('shelljs');
const ask = require('./ask');
const ora = require('ora');
const store = require('./store');

const spinner = ora({ text: '' })

module.exports = async () => {
  let install = !!store.get('install');
  let name = store.get('appName');
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
		shell.exec(`npm i ${dependancies}`);
		shell.exec(`npm i ${devDependancies} --save-dev`);	
    spinner.succeed(`${chalk.green(`Dependantcies Intalled Successfully`)}`);
    shell.cd('..')
	} else {
    shell.cd(name)
		console.log(`\n${chalk.yellow(`ADDING DEPENDANCIES 🏄🏻‍♂️`)}\n `)
		shell.exec(`npx add-dependencies ./package.json ${dependancies}`);
		shell.exec(`npx add-dependencies ./package.json ${devDependancies} --save-dev`);
    shell.cd('..')
	}
}