const TextMessage = require('./../../../../templates/text-message');

module.exports = (id, data) => new TextMessage({
    recipientId: id,
    text: JSON.stringify(data)
});
