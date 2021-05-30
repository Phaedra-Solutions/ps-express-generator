const requireText = require('require-text');
const fs = require('fs');

/**
 * @description Copy the content to the file
 * @param {*} src soure file path
 * @param {*} destination destination file path
 */
module.exports = (name, src, destination) => {
  if (!fs.existsSync(destination)){
    fs.mkdirSync(destination, {recursive: true});
  }

  const content =	requireText(src, require);
  fs.writeFileSync(`${destination}/${name}`, content, err => {
    if (err) {
      console.error(err)
      return
    } 
  })
  console.log(`\n [Created]: ${destination}`);
}