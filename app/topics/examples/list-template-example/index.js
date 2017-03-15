const ListTemplate = require('./../../../../templates/list-template');

module.exports = (id) => new ListTemplate({
    recipientId: id,
    elements: [
        ListTemplate.element({
            title: 'List element 1',
            subtitle: 'List element subtitle',
            imageUrl: 'http://placehold.it/350x150',
            url: 'https://www.google.com',
            buttons: [
                ListTemplate.urlButton({
                    title: 'Web link example',
                    url: 'https://ww.google.com'
                })
            ]
        }),
        ListTemplate.element({
            title: 'List element 2',
            subtitle: 'List element subtitle',
            imageUrl: 'http://placehold.it/350x150',
            url: 'https://www.google.com',
            buttons: [
                ListTemplate.postbackButton({
                    title: "A postback example",
                    payload: JSON.stringify({"route": "payloadExample"})
                })
            ]
        }),
        ListTemplate.element({
            title: 'List element 3',
            subtitle: 'List element subtitle',
            imageUrl: 'http://placehold.it/350x150',
            url: 'https://www.google.com',
            buttons: [
                ListTemplate.postbackButton({
                    title: "A postback example",
                    payload: JSON.stringify({"route": "payloadExample"})
                })
            ]
        }),
        ListTemplate.element({
            title: 'List element 4',
            subtitle: 'List element subtitle',
            imageUrl: 'http://placehold.it/350x150',
            url: 'https://www.google.com',
            buttons: [
                ListTemplate.postbackButton({
                    title: "A postback example",
                    payload: JSON.stringify({"route": "payloadExample"})
                })
            ]
        })
    ]
});