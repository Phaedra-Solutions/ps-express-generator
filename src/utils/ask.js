const { Input, Confirm } = require('enquirer');
const to = require('await-to-js').default;
const handleError = require('cli-handle-unhandled');

/**
 * 
 * @param {{ 
 * name: string, 
 * message: string, 
 * hint: stirng,
 * initial?: string,
 * choices?: []
 * }} config 
 * @returns {*} response
 */
module.exports = async (config) => {
  const { message, hint, initial, choices } = config;
  const [err, response] =  await to(
    new Input({
      message: message,
      initial: initial,
      hint: hint,
      validate: (value) => {
        if (choices && choices.includes(value)) {
          return true;
        } else {
          return false;
        }
      }  
    }).run()
  );
  handleError('INPUT', err);

  return response;
}