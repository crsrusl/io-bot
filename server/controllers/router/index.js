const lang = require('./../../config/lang');
const routes = require('./../../../app/routes');
const send = require('./../../controllers/send');
const getRoute = require('./get-route');

module.exports = (payload, id, data) => {
    const route = getRoute(payload);

    if (routes[route] !== undefined) {
        send(routes[route](id, data), (error) => {
            if (error) console.error(error);
        });
    }
    else console.error(lang.noMatchingRoute, route);
};