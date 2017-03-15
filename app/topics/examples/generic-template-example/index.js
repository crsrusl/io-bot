const GenericTemplate = require('./../../../../templates/generic-template');

module.exports = (id) => new GenericTemplate({
    recipientId: id,
    elements: [
        GenericTemplate.element({
            title: 'Element title 1',
            subtitle: 'Element subtitle',
            url: 'https://www.google.com',
            imageUrl: 'http://placehold.it/350x150',
            buttons: [
                GenericTemplate.urlButton({
                    title: "Web link example",
                    url: 'https://www.google.com'
                }),
                GenericTemplate.postbackButton({
                    title: "A postback example",
                    payload: JSON.stringify({route: "payloadExample"})
                })
            ]
        }),
        GenericTemplate.element({
            title: 'Element title 2',
            subtitle: 'Element subtitle',
            url: 'https://www.google.com',
            imageUrl: 'http://placehold.it/350x150',
            buttons: [
                GenericTemplate.urlButton({
                    title: "Web link example",
                    url: 'https://www.google.com'
                }),
                GenericTemplate.postbackButton({
                    title: "A postback example",
                    payload: JSON.stringify({route: "payloadExample"})
                })
            ]
        }),
        GenericTemplate.element({
            title: 'Element title 3',
            subtitle: 'Element subtitle',
            url: 'https://www.google.com',
            imageUrl: 'http://placehold.it/350x150',
            buttons: [
                GenericTemplate.urlButton({
                    title: "Web link example",
                    url: 'https://www.google.com'
                }),
                GenericTemplate.postbackButton({
                    title: "A postback example",
                    payload: JSON.stringify({route: "payloadExample"})
                })
            ]
        })
    ]
});