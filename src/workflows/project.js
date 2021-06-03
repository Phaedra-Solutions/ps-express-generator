const writer = require('../writer');
const changes = require('../utils/buildConfig');
const data = require('../utils/data');
const shell = require('shelljs');
const install = require('../utils/install');


/**
 * @description New Project workflow
 * @param {string} name name of the project
 * @param {boolean} $install
 */
module.exports = async (name, $install) => {
  data.appName = name;


  shell.mkdir(data.appName);
	shell.cd(data.appName);

	for (let i = 0; i < changes.length; i++) {
		writer({ ...changes[i] }, data.appName);
	}

  console.log('\n');
  await install($install);
}