const messageController = require('./../message-controller');

module.exports = function (req, res) {
    const data = req.body;

    if (data.object === 'page') {
        data.entry.forEach((page) => page.messaging.forEach((message) => messageController(message)));
    }

    return res.sendStatus(200);
};