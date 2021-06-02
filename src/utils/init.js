const welcome = require('cli-welcome');
const packJson = require('../../package.json');
const figlet = require('figlet');
const { timeout } = require('../utils');
const unhandled = require('cli-handle-unhandled');
// const dim = chalk.dim;
const chalk = require('chalk');
const italic = chalk.italic;

const log = console.log;

module.exports = () => {
  console.log(figlet.textSync('PS-CLI / EXPRESS'));

  unhandled();
  welcome({
    title: `PS-CLI`,
    tagLine: `by Mustafa Shykh`,
    tagLine: packJson.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: false,
    version: packJson.version
  });

  log(`${italic(
`
Pheadra Solutons custom CLI for all major javascript Libs, this @ps-cli/express will generate 
an express app with latest dependancies and apply our coding standards, :), please visit 
https://www.npmjs.com/~ps-cli for more info and packages.
`
  )}`)

  timeout(3);
}