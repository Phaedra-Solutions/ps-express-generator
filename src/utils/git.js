const shell = require('shelljs');
const ask = require('./ask');
const chalk = require('chalk');


module.exports = async (name, $git) => {
  let git = $git;
  // Confirming
	if (!git) {
		const _git = await ask({name: 'git', message: 'Do want to initalize git ?', hint: '(yes|no)', initial: 'no', choices: ['yes', 'no'] });
		if (_git === 'yes') git = true;
	}

  if (git) {
    console.log(`\n ${chalk.yellow(`INITIALIZING GIT 🎉`)}\n `)
    shell.cd(name);
    if (shell.which('git')) {
      shell.exec('git init');
    }
    shell.cd('..');
  }
}