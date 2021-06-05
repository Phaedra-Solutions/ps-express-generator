const install = require('../../utils/install');
const git = require('../../utils/git');
const path = require('path');
const store = require('../../utils/store');
const copy = require('copy-template-dir');
const chalk = require('chalk');


/**
 * @description New Project workflow
 */
module.exports = async () => {  
  const vars = store.get('vars');

  const inDir = path.join(__dirname, `../../template/js/new`);
  let outDir = path.join(process.cwd(), `${vars.name}`);

  copy(inDir, outDir, vars, async (err, createdFiles) => {
    if (err) throw err;
    createdFiles.forEach((filePath) => console.log(`${chalk.green("[Created]:")} ${filePath.replace(process.cwd(), '')}`));

    console.log('\n');
    await install();

    console.log('\n');
    await git();
  });
}