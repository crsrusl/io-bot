# io-bot

A chatbot framework for facebook messenger with routing.

Facebook messenger developer documentation: https://developers.facebook.com/docs/messenger-platform

## Server documentation

The following text is for reference only, you should not need to modify the server code (/server/) and should rather look the make changes in the app directory (/app/)

### Flow of data

*Webhook* > *Controller* [delivery-controller, message-controller, postback-controller] > *Router* > *Routes* > *Topic* 

### Webhook

All data between facebook and chatbot framework comes in on the post route webhook (/server/controllers/webhook/post.js)

From the webhook data is passed to the relevant controller depending on the message type.

### Controllers

Controllers handle the incoming message types and their data data and then pass off to the router.

### Controller types

##### Delivery controller (/server/controllers/message-controller/delivery-controller)

This is controller receives message receives notifications and console logs them out

##### Message controller (/server/controllers/message-controller/message-controller)

This controller handles quick-replies and message attachments. Facebook groups these 2 message types, which is why this controller has 2 responsbilities.

##### Postback controller (/server/controllers/message-controller/postback-controller)

This controller handles postback messages types and immediately routes them to the routers
 
*Router*

The router controller is responsible routing message types to the correct conversation topic. If no route is identified, a console error is logged with the failed route.

## App documentation

### Config

The config for facebook can be found in the facebook folder. You will need edit this config file to match your facebook developer credentials (e.g. Page Access Token, Secret, etc)

### Routes

The routes file should import all conversation topics. The router will use the routes file as a way to run to identify specific conversation topics. To trigger a conversation topic, include the following JSON in the payload

````
{route: "nameOfTopic"}
````

This payload will ensure the route named "nameOfTopic" is triggered. Payloads cannot be JSON, therefore all payloads should be stringified before sending to the client
 
## Sending data on a payload

Along with route data on payload (see above), it is possible to send custom data on a payload. The app framework is send any data to your conversation topics automatically when you format a payload follows:

````
{route: "nameOfTopic", data: { foo: bar }}
````

You can send as much data as you need. Sending data with payloads is a good way to maintain session state with the client.