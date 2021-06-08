const shell = require('shelljs');
const path = require('path');
const store = require('../../utils/store');
const copy = require('copy-template-dir');
const replace = require('replace-in-file');
const chalk = require('chalk');
const ask = require('../../utils/ask');


/**
 * @description New Route workflow
 */
module.exports = async () => {  
  const vars = store.get('vars');
  let crud = store.get('crud')


  if (!crud) {
    console.log('\n');
    const _crud = await ask({name: 'CRUD', message: 'Do want to generate CRUDs ?', hint: '(yes|no)', initial: 'no', choices: ['yes', 'no'] });
    if (_crud === 'yes') crud = true;
  }

  let inDir = path.join(__dirname, `../../template/js/route`);
  let outDir = path.join(process.cwd(), './src/@routes/', `${vars.name}`);

  if (crud) {
    inDir = path.join(__dirname, `../../template/js/route-crud`);
    outDir = path.join(process.cwd(), './src/@routes/', `${vars.name}`);  
  }
  
  if (!shell.test('-e', path.join(process.cwd(), './package.json'))) {
    shell.echo('The command can only be run in @root folder having package.json');
    process.exit(0);
  }

  if (shell.test('-e', outDir)){
    shell.echo('\nThe route already exsists\n');
    process.exit(0);
  }


  copy(inDir, outDir, vars, async (err, createdFiles) => {
    if (err) throw err;
    createdFiles.forEach((filePath) => console.log(`${chalk.green("[Created]:")} ${filePath.replace(process.cwd(), '')}`));
  });
  

  replace({
    files: path.join(`${outDir}`, '../index.js'),
    from: `module.exports = (app) => {`,
    to: `module.exports = (app) => {
  app.use('/v1/${vars.name}', require('./${vars.name}/routes-config'));`
  })
}