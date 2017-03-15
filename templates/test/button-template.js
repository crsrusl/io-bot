const ButtonTemplate = require('./../button-template');

describe('button-template', function () {
    it('should throw an error if text length is over 640 characters', function () {
        let template = {
            recipientId: 1,
            text: faker.lorem.words(640),
            buttons: [{}, {}, {}]
        };

        expect(() => new ButtonTemplate(template)).to.throw(Error);
    });

    it('should throw an error if there is no text', function () {
        let template = {
            recipientId: 1,
            buttons: [{}, {}, {}]
        };

        expect(() => new ButtonTemplate(template)).to.throw(Error);
    });

    it('should throw an error if there are more than 3 buttons', function () {
        let template = {
            recipientId: 1,
            text: faker.lorem.words(1),
            buttons: [{}, {}, {}, {}]
        };

        expect(() => new ButtonTemplate(template)).to.throw(Error);
    });

    it('should throw an error if there is less than 1 button', function () {
        let template = {
            recipientId: 1,
            text: faker.lorem.words(1),
            buttons: []
        };

        expect(() => new ButtonTemplate(template)).to.throw(Error);
    });

    it('should throw an error if there are no buttons', function () {
        let template = {
            recipientId: 1,
            text: faker.lorem.words(1)
        };

        expect(() => new ButtonTemplate(template)).to.throw(Error);
    });

    describe('static methods', function () {
        it('url button', function () {
            expect(ButtonTemplate.urlButton).to.be.a('function')
        });

        it('postback button', function () {
            expect(ButtonTemplate.postbackButton).to.be.a('function')
        });

        it('call button', function () {
            expect(ButtonTemplate.callButton).to.be.a('function')
        });
    });
});