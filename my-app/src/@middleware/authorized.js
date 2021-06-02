const { handleError } = require('../@shared/common/helper');

/**
 * @description For multi-role user management
 * @param {*} opts 
 * @returns 
 */
exports.isAuthorized = (opts = { hasRole: [], allowSameUser: false } ) => {
    return (req, res, next) => {
      try {
      const { userType, id } = res.locals;
      const _id  = req.params.id;
  
      if (opts.allowSameUser && _id && _id === id)
        return next();
  
      if (!userType)
        return res.status(403).send({message: "Unautherized"});
  
      if (opts.hasRole.includes(userType))
        return next();
  
      return res.status(403).send({message: "Unautherized"});
    } catch (err) {
      return handleError(res, err);
    }
  }
}