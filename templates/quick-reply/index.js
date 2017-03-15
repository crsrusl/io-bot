const lang = require('./../config/lang');
const Template = require('./../base-template');

module.exports = class QuickReply extends Template {
    constructor({recipientId, text, quickReplies}) {
        super(recipientId);

        if (!text) {
            throw new Error(lang.quickReplies.textLength);
        }

        if (quickReplies.length > 11 || quickReplies.length < 1 || !quickReplies) {
            throw new Error(lang.quickReplies.quickReplyLength);
        }

        let template = {
            "message": {
                "text": text,
                "quick_replies": quickReplies
            }
        };

        return super.render(template);
    }

    static quickReply(data) {
        return super.quickReply(data);
    }

    static locationQuickReply(data) {
        return super.locationQuickReply(data);
    }
};