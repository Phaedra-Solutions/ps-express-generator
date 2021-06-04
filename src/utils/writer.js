const chalk = require('chalk');
const cpFile = require('cp-file');
const path = require('path');
const makeDir = require('make-dir');
const replace = require('replace-in-file');
const store = require('./store');

/**
 * @description Copy the content to the file
 * @param { src, destination } $config config for file writing
 */
module.exports = async ($config) => {
  const appName = store.get('appName');

  const { filename, src, destination, changes } = $config;

  const inFile = path.join(__dirname, `../${src}`);
  let outDir = path.join(process.cwd(), `${appName}/${destination}`);

  await makeDir(outDir);
  outFile = path.join(`${outDir}/${filename}`);
  await cpFile(inFile, outFile);
  
  if (changes && changes.length) {
    for (let i = 0; i < changes.length; i++) {
      replace({...changes[i], files: outFile});
    }
  }

  console.log(`${chalk.green("[Created]:")} ${path.join(`${appName}/${destination}/${filename}`)}`);
}