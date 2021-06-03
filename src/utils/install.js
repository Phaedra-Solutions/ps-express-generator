const { dependancies, devDependancies } = require('./data');
const chalk = require('chalk');
const shell = require('shelljs');
const ask = require('./ask');

module.exports = async ($install) => {
  let install = $install;
  // Confirming
	if (!install) {
		const _intall = await ask({name: 'install', message: 'Do want to install dependancies ?', hint: '(yes|no)', initial: 'no', choices: ['yes', 'no'] });
		if (_intall === 'yes') flags.install = true;
	}

	// ########################## ADDING / INSTALLING DEPNEDCIES ########################## //
	if (install) {
		console.log(`\n ${chalk.yellow(`INSTALLING DEPENDANCIES 🚀`)}\n `)
		shell.exec(`npm i ${dependancies}`);
		shell.exec(`npm i ${devDependancies} --save-dev`);	
	} else {
		console.log(`\n${chalk.yellow(`ADDING DEPENDANCIES 🏄🏻‍♂️`)}\n `)
		shell.exec(`npx add-dependencies ./package.json ${dependancies}`);
		shell.exec(`npx add-dependencies ./package.json ${devDependancies} --save-dev`);
	}
}