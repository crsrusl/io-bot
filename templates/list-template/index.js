const lang = require('./../config/lang');
const Template = require('./../base-template');

module.exports = class ListTemplate extends Template {
    constructor({recipientId, topElementStyle = "large", elements, buttons}) {
        super(recipientId);

        if (elements.length > 4 || elements.length < 2 || !elements) {
            throw new Error(lang.listTemplate.elementLength);
        }

        if (buttons && buttons.length > 1) {
            throw new Error(lang.listTemplate.buttonLength);
        }

        if (!['large', 'compact'].includes(topElementStyle)) {
            throw new Error(lang.listTemplate.topElementType);
        }

        let template = {
            "message": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "list",
                        "top_element_style": topElementStyle,
                        "elements": elements
                    }
                }
            }
        };

        if (buttons) template.message.attachment.payload.buttons = buttons;

        return super.render(template);
    }

    static urlButton(data) {
        return super.urlButton(data);
    }

    static postbackButton(data) {
        return super.postbackButton(data);
    }

    static element(data) {
        return super.listElement(data);
    }
};