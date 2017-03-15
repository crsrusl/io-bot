const lang = require('./../config/lang');
const Template = require('./../base-template');

module.exports = class ButtonTemplate extends Template {
    constructor({recipientId, text, buttons}) {
        super(recipientId);

        if (text.length > 640) {
            throw new Error(lang.buttonTemplate.textLength)
        }

        if (buttons.length > 3 || buttons.length < 1 || !buttons) {
            throw new Error(lang.buttonTemplate.buttonLength)
        }

        return super.render({
            "message": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": text,
                        "buttons": buttons
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

};