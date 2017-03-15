const Template = require('./../base-template');

module.exports = class TextMessage extends Template {
    constructor({recipientId, text}) {
        super(recipientId);

        return super.render({
            "message": {
                "text": text
            }
        });
    }
};