const { handleError } = require('../../@shared/utils');


/**
 * @description To get all {{name}}
 * @param {*} req 
 * @param {*} res 
 * @param {*} next
 * @returns {Array<{{name}}>} {{name}}
 */
exports.getAll = (req, res, next) => {
  try {
    return res.status(200).send({
      endpoint: '/v1/{{name}}',
      method: req.method,
      description: 'Dummy endpoint to get all {{name}}',
      {{name}}: []
    });
  } catch (err) {
    return handleError(res, err);
  }
}


/**
 * @description To get {{name}} by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {*} {{name}}
 */
exports.getById = (req, res, next) => {
  try {
    const { id } = req.params;
    return res.status(200).send({
      endpoint: '/v1/{{name}}/:id',
      method: req.method,
      description: 'Dummy endpoint to get {{name}} with id',
      {{name}}: {id}
    });
  } catch (err) {
    return handleError(res, err);
  }
}


/**
 * @description Adds a {{name}}
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {*} Added {{name}}
 */
exports.add = (req, res, next) => {
  try {
    return res.status(201).send({
      endpoint: '/v1/{{name}}',
      method: req.method,
      description: 'Dummy endpoint to add {{name}}',
      {{name}}: req.body
    });
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description Updates a {{name}}
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {*} update {{name}}
 */
exports.patch = (req, res, next) => {
  try {
    const { id } = req.params;
    return res.status(200).send({
      endpoint: '/v1/{{name}}/:id',
      method: req.method,
      description: 'Dummy endpoint to update {{name}}',
      {{name}}: { id, ...req.body }
    });
  } catch (err) {
    return handleError(res, err);
  }
}


/**
 * @description To delete a record
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {*} http response
 */
exports.delete = (req, res, next) => {
  try {
    const { id } = req.params;
    return res.status(200).send({
      endpoint: '/v1/{{name}}/:id',
      method: req.method,
      description: 'Dummy endpoint to update {{name}}',
      {{name}}: {id}
    });
  } catch (err) {
    return handleError(res, err);
  }
}