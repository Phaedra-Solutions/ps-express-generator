const { handleError } = require('../../@shared/utils');

/**
 * @description default route for the App
 * @param {*} req 
 * @param {*} res 
 * @param {*} next
 * @returns Http Page 
 */
exports.default = (req, res, next) => {
  try {
    return res.render('index', { title: 'Express' });
  } catch (err) {
    return handleError(res, err);
  }
}