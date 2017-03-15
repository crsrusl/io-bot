const runConfig = require('./../app/config/');
const lang = require('./config/lang');
const facebookConfig = require('./../app/config/facebook');

global.pageAccessToken = process.env.PAGE_ACCESS_TOKEN;
global.appSecret = process.env.APP_SECRET;
global.verifyToken = process.env.VERIFY_TOKEN;

if (!global.pageAccessToken || !global.appSecret || !global.verifyToken) {
    console.error(lang.requireConfig);
    process.exit(1);
}

runConfig((error) => {
    if (error) return console.error(error);

    const express = require('express');
    const app = express();
    const morgan = require('morgan');
    const bodyParser = require('body-parser');

    app.use(morgan('dev'));
    app.use(bodyParser.json());

    app.get(facebookConfig.webhookAddress, (req, res) => require('./controllers/webhook/get')(req, res));
    app.post(facebookConfig.webhookAddress, (req, res) => require('./controllers/webhook/post')(req, res));

    app.listen(5001, function () {
        console.log("Server listening on port 5001");
    });
});