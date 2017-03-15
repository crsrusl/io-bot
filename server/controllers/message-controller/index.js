const lang = require('./../../config/lang');
const messageController = require('./message-controller');
const postbackController = require('./postback-controller');
const deliveryController = require('./delivery-controller');

module.exports = function (event) {
    if (!event) console.error(lang.noMessageEvent);

    if (event.message) messageController(event.message, event.sender.id);
    if (event.postback) postbackController(event.postback, event.sender.id);
    if (event.delivery) deliveryController(event.delivery, event.sender.id);
};