# io-bot

A chatbot framework for facebook messenger with routing.

Facebook messenger developer documentation: https://developers.facebook.com/docs/messenger-platform

## Server documentation

You should not need to modify the server code (/server/) and should rather look the make changes in the app directory (/app/).

### Flow of data

*Webhook* > *Controller* [delivery-controller, message-controller, postback-controller] > *Router* > *Routes* > *Topic* 

### Facebook webhook

All data between facebook and the io-bot framework comes in on the post route webhook (/server/controllers/webhook/post.js).

Data is passed from the webhook to the relevant message controller.

### Controllers

Controllers handle the incoming messages and their data.

### Controller types

##### Delivery controller (/server/controllers/message-controller/delivery-controller)

This is controller receives message delivery notifications.

##### Message controller (/server/controllers/message-controller/message-controller)

This controller receives quick-replies and message attachments.

##### Postback controller (/server/controllers/message-controller/postback-controller)

This controller receives postback messages.
 
##### Router controller

The router controller sends message data to the correct route, where it is then passed into a "conversation topic".

## App documentation

### Config

The config for facebook can be found in the facebook folder. It contains the following:

- The webhook url route for your chatbot
- Welcome message configuration 
- Get started message configuration
- Persistent menu configuration

### Routes

The routes file is where you import your conversation topics. 

The router will use the routes file to identify specific conversation topics. 

To trigger a conversation topic, include the following JSON in your message payload payload:

````
{route: "nameOfTopic"}
````

This payload will ensure the route named "nameOfTopic" is triggered. Payloads cannot be JSON, therefore all payloads should be stringified before sending to the client.
 
## Sending data on a payload

Along with route data on payload (see above), it is possible to send custom data on a payload. 

Any data sent to your chatbot service will automatically pass through your router and be available in your conversation topic when the following format is used:

````
{route: "nameOfTopic", data: { foo: bar }}
````

You can send as much data as you need. 

Sending data with payloads is a good way to maintain session state with the client.