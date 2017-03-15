const router = require('./../../router');

module.exports = (event, id) => router(event.payload, id);