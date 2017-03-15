const TextMessage = require('./../../../../templates/text-message');

module.exports = (id) => new TextMessage({
    recipientId: id,
    text: "You selected Option 1"
});