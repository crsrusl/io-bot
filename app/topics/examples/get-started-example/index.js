const TextMessage = require('./../../../../templates/text-message');

module.exports = (id) => new TextMessage({
    recipientId: id,
    text: "Hi, I'm IO-bot! Nice to meet you."
});