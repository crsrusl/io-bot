const ButtonTemplate = require('./../../../../templates/button-template');

module.exports = (id) => new ButtonTemplate({
    recipientId: id,
    text: "This is a button template",
    buttons: [
        ButtonTemplate.urlButton({
            title: "Web link example",
            url: "https://www.google.com"
        }),
        ButtonTemplate.postbackButton({
            title: "A postback example",
            payload: JSON.stringify({route: "payloadExample"})
        })
    ]
});