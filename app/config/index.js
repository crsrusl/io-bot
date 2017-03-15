const async = require('async/series');
const request = require('request');
const facebookConfig = require('./facebook');

function postRequest(json, next, cb) {
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messenger_profile',
        qs: {
            access_token: global.pageAccessToken
        },
        method: 'POST',
        json: json
    }, (error, response, body) => {
        if (body.error) return cb(new Error(body.error.message));
        else return next(null, body);
    });
}

module.exports = function (cb) {
    return async([
        (next) => postRequest(facebookConfig.getStarted, next, cb),
        (next) => postRequest(facebookConfig.greeting, next, cb),
        (next) => postRequest(facebookConfig.persistentMenu, next, cb),
    ], (error, result) => {
        if (error) return cb(new Error(error));
        else return cb(null, result);
    });
};