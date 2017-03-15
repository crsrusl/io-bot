const lang = require('./../config/lang');

module.exports = class Template {
    constructor(recipientId) {

        if (!recipientId) {
            throw new Error(lang.noRecipientId);
        }

        this.recipientId = recipientId;
    }

    render(json) {
        return Object.assign({
            "recipient": {
                "id": this.recipientId
            }
        }, json)
    }

    static urlButton({url, title, webviewHeightRatio = "full"}) {
        return {
            "type": "web_url",
            "url": url,
            "title": title,
            "webview_height_ratio": webviewHeightRatio
        }
    }

    static postbackButton({title, payload}) {
        return {
            "type": "postback",
            "title": title,
            "payload": payload
        }
    }

    static callButton({title, payload}) {
        return {
            "type": "phone_number",
            "title": title,
            "payload": payload
        }
    }

    static shareButton() {
        return {
            "type": "element_share"
        }
    }

    static element({title, imageUrl, subtitle, url, webviewHeightRatio = "full", buttons}) {
        let template = {
            "title": title,
            "default_action": {
                "type": "web_url",
                "url": url,
                "webview_height_ratio": webviewHeightRatio
            },
            "buttons": buttons
        };

        if (imageUrl) template = Object.assign(template, {
            "image_url": imageUrl
        });

        if (subtitle) template = Object.assign(template, {
            "subtitle": subtitle
        });

        return template;
    }

    static listElement({title, imageUrl, subtitle, url, webviewHeightRatio = "full", buttons}) {
        let template = {
            "title": title,
            "default_action": {
                "type": "web_url",
                "url": url,
                "webview_height_ratio": webviewHeightRatio
            }
        };

        if (imageUrl) template = Object.assign(template, {
            "image_url": imageUrl,
        });

        if (subtitle) template = Object.assign(template, {
            "subtitle": subtitle
        });

        if (buttons) template = Object.assign(template, {
            "buttons": buttons
        });

        return template;
    }

    static quickReply({title, payload, imageUrl}) {
        let template = {
            "content_type": "text",
            "title": title,
            "payload": payload
        };

        if (imageUrl) template = Object.assign(template, {
            "image_url": imageUrl
        });

        return template
    }

    static locationQuickReply() {
        return {
            "content_type": "location"
        }

    }
};