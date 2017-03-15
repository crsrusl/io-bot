const config = require('./../../../app/config/facebook/index');
const lang = require('./../../config/lang');

module.exports = function (req, res) {
    if (req.query['hub.verify_token'] === global.verifyToken) return res.send(req.query['hub.challenge']);
    else return res.status(403).send(lang.wrongValidationToken);
};