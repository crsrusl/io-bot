module.exports = {
    "webhookAddress": "/fb/io-bot/webhook",
    "greeting": {
        "greeting": [
            {
                "locale": "default",
                "text": "Hello! Welcome to IO-bot example."
            }
        ]
    },
    "getStarted": {
        "get_started": {
            "payload": JSON.stringify({route: "getStartedExample"})
        }
    },
    "persistentMenu": {
        "persistent_menu": [
            {
                "locale": "default",
                "composer_input_disabled": true,
                "call_to_actions": [{
                    "title": "Template Examples",
                    "type": "nested",
                    "call_to_actions": [
                        {
                            "type": "postback",
                            "title": "Button Template Example",
                            "payload": JSON.stringify({route: "buttonTemplateExample"})
                        },
                        {
                            "type": "postback",
                            "title": "Generic Template Example",
                            "payload": JSON.stringify({route: "genericTemplateExample"})
                        },
                        {
                            "type": "postback",
                            "title": "List Template Example",
                            "payload": JSON.stringify({"route": "listTemplateExample"})
                        },
                        {
                            "type": "postback",
                            "title": "Quick Reply Example",
                            "payload": JSON.stringify({"route": "quickReplyExample"})
                        },
                        {
                            "type": "postback",
                            "title": "Text Message Example",
                            "payload": JSON.stringify({"route": "textMessageExample"})
                        }]
                }]
            }
        ]
    }
};