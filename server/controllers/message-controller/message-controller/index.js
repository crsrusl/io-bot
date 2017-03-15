const router = require('./../../router');
const attachments = require('./attachments');

module.exports = (event, id) => {
    if (event.quick_reply) router(event.quick_reply.payload, id);
    if (event.attachments) event.attachments.forEach((attachment) => attachments(attachment, id));
};