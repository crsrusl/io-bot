const TextMessage = require('./../../../../templates/text-message');

module.exports = (id) => new TextMessage({
    recipientId: id,
    text: "This is an example text message reply."
});