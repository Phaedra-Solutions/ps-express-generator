const { handleError } = require('../@shared/common/helper');
const jwt = require('jsonwebtoken');

/**
 * @description Authentication Middleware
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.isAuthenticated = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
       return res.status(401).send({ message: 'Unauthorized' });

   if (!authorization.startsWith('Bearer'))
       return res.status(401).send({ message: 'Unauthorized' });

   const split = authorization.split('Bearer ')
   if (split.length !== 2)
       return res.status(401).send({ message: 'Unauthorized' });

   const token = split[1]

    // Verifing Token
    const response = jwt.verify(token, process.env.SECRET);
    if(!response) return res.status(401).send({ message: 'Unauthorized' });

    res.locals = {
      userType: response.userType,
      id: response._id,
      email: response.email
    }

    return next();

  } catch (err) {
    return handleError(res, err);
  }
}