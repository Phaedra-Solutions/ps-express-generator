const writer = require('../../utils/writer');
const templator = require('../../template/paths/js/new');
const install = require('../../utils/install');
const git = require('../../utils/git');

/**
 * @description New Project workflow
 */
module.exports = async () => {  
  const template = templator();

	for (let i = 0; i < template.length; i++) {
    console.log({ ...template[i] });
    await writer({ ...template[i] });
	}

  console.log('\n');
  await install();

  console.log('\n');
  await git();

}