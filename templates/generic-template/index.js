const lang = require('./../config/lang');
const Template = require('./../base-template');

module.exports = class GenericTemplate extends Template {
    constructor({recipientId, elements}) {
        super(recipientId);

        if (elements.length > 10 || elements.length < 1 || !elements) {
            throw new Error(lang.genericTemplate.elementLength);
        }

        return super.render({
            "message": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": elements
                    }
                }
            }
        });
    }

    static urlButton(data) {
        return super.urlButton(data);
    }

    static postbackButton(data) {
        return super.postbackButton(data);
    }

    static callButton(data) {
        return super.callButton(data);
    }

    static shareButton() {
        return super.shareButton();
    }

    static element(data) {
        return super.element(data);
    }

};