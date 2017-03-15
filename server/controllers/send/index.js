const config = require('./../../../app/config/facebook/index');
const request = require('request');

module.exports = (message, cb) => request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: global.pageAccessToken},
    method: 'POST',
    json: message
}, (error, response, body) => cb(error, body));