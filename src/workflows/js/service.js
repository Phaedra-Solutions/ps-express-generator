const shell = require('shelljs');
const path = require('path');
const store = require('../../utils/store');
const copy = require('copy-template-dir');
const replace = require('replace-in-file');
const chalk = require('chalk');


/**
 * @description New Service workflow
 */
module.exports = async () => {  
  const vars = store.get('vars');

  let inDir = path.join(__dirname, `../../template/js/service`);
  let outDir = path.join(process.cwd(), './src/@services/', `${vars.name}`);

  
  if (!shell.test('-e', path.join(process.cwd(), './package.json'))) {
    shell.echo('The command can only be run in @root folder having package.json');
    process.exit(0);
  }

  if (shell.test('-e', outDir)){
    shell.echo('\nThe service already exsists\n');
    process.exit(0);
  }


  copy(inDir, outDir, vars, async (err, createdFiles) => {
    if (err) throw err;
    createdFiles.forEach((filePath) => console.log(`${chalk.green("[Created]:")} ${filePath.replace(process.cwd(), '')}`));
  });
  

  replace({
    files: path.join(`${outDir}`, '../index.js'),
    from: `module.exports = {`,
    to: `module.exports = {
  ${vars.name}: require('./${vars.name}'),`
  })
}