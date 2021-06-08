const { handleError } = require('../../@shared/utils');

exports.default = (req, res, next) => {
  try {
    return res.status(200).send({ 
      endpoint: '/v1/{{name}}', 
      description: 'auto-generate with @ps-cli@express' 
    });
  } catch (err) {
    return handleError(res, err);
  }
}