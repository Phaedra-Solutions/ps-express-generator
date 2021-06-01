const requireText = require('require-text');
const fs = require('fs');
const chalk = require('chalk');

/**
 * @description Copy the content to the file
 * @param { name, src, destination, changes } $config config for file writing
 * @param { string } $name name of the app
 */
module.exports = ($config, $name=undefined) => {
  const { name, src, destination, changes } = $config;

  if (!fs.existsSync(destination)){
    fs.mkdirSync(destination, {recursive: true});
  }

  let content =	requireText(src, require);

  // Running Changes if any
  if (changes && changes.length > 0) {
    for (let i = 0; i < changes.length; i++) {
      content = content.replace(changes[i].from, changes[i].to);
    }
  }


  fs.writeFileSync(`${destination}/${name}`, content, err => {
    if (err) {
      console.error(err)  
      return
    } 
  })
  console.log(`${chalk.green("[Created]:")} ${$name}/${destination !== '.' ? destination : ''  }${name}`);
}