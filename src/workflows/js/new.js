const writer = require('../../utils/writer');
const changes = require('../../template/paths/js/new');
const install = require('../../utils/install');
const git = require('../../utils/git');

/**
 * @description New Project workflow
 * @param {string} name name of the project
 * @param {boolean} $install
 */
module.exports = async (name, options) => {  

	for (let i = 0; i < changes.length; i++) {
    if (changes[i].src.includes('package.josn')) {
      await writer({ ...changes[i], changes: {name} }, name);
    } else  {
      await writer({ ...changes[i] }, name);
    }
	}

  console.log('\n');
  await install(options.install);

  console.log('\n');
  await git(name, options.git);

}