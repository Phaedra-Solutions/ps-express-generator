const welcome = require('cli-welcome');
const packJson = require('../../package.json');
const figlet = require('figlet');
const { timeout } = require('../utils');
const unhandled = require('cli-handle-unhandled');
const chalk = require('chalk');
const { welcomeTxt } = require('./data');
const italic = chalk.italic;

const log = console.log;

module.exports = () => {
  log('\n');
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

  log(`${italic(`${welcomeTxt}`)}`)
  log('\n');

  timeout(3);
}