const chalk = require('chalk');
const cpFile = require('cp-file');
const path = require('path');
const makeDir = require('make-dir');
const replace = require('replace-in-file');

/**
 * @description Copy the content to the file
 * @param { src, destination } $config config for file writing
 */
module.exports = async ($config, name) => {
  const { filename, src, destination, changes } = $config;

  const inFile = path.join(__dirname, `../${src}`);
  let outDir = path.join(process.cwd(), `${name}/${destination}`);

  await makeDir(outDir);
  outFile = path.join(`${outDir}/${filename}`);
  await cpFile(inFile, outFile);
  
  // Find a better way
  if (filename === 'package.json') {
    replace({
      files: outFile,
      from: "{{name}}",
      to: name,
    })
  }

  console.log(`${chalk.green("[Created]:")} ${path.join(`${name}/${destination}/${filename}`)}`);
}