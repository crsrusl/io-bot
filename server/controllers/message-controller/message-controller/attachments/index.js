const router = require('./../../../router');

module.exports = (event, id) => {
    if (event.type === 'location') return router(JSON.stringify({"route": "quickReplyLocation"}), id, event.payload.coordinates);
};