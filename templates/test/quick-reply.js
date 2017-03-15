const QuickReply = require('./../quick-reply');

describe('quick-reply', function () {
    it('should throw an error if the quick reply count is over 11', function () {
        const template = {
            recipientId: 1,
            text: faker.lorem.words(1),
            quickReplies: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        };

        expect(() => new QuickReply(template)).to.throw(Error);
    });

    it('should throw an error if there is less than 1 quick reply', function () {
        const template = {
            recipientId: 1,
            text: faker.lorem.words(1),
            quickReplies: []
        };

        expect(() => new QuickReply(template)).to.throw(Error);
    });

    it('should throw an error if there are no quick replies', function () {
        const template = {
            recipientId: 1,
            text: faker.lorem.words(1),
        };

        expect(() => new QuickReply(template)).to.throw(Error);
    });

    it('should throw an error if no text is provided', function () {
        const template = {
            recipientId: 1,
            quickReplies: [{}]
        };

        expect(() => new QuickReply(template)).to.throw(Error);
    });
});