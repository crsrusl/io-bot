module.exports = function (payload) {
    if (!payload) return false;

    try {
        payload = JSON.parse(payload);
    }
    catch (error) {
        console.error(error);
    }

    if (payload.route) return payload.route;
};