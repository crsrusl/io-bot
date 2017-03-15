const QuickReply = require('./../../../../templates/quick-reply');

module.exports = (id) => new QuickReply({
    recipientId: id,
    text: "Quick reply example",
    quickReplies: [
        QuickReply.quickReply({
            title: "Option 1",
            payload: JSON.stringify({"route": "quickReplyOption1"})
        }),
        QuickReply.quickReply({
            title: "Option 2",
            payload: JSON.stringify({"route": "quickReplyOption2"})
        }),
        QuickReply.locationQuickReply()
    ]
});