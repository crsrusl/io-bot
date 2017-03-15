const lang = require('./../config/lang');
const ListTemplate = require('./../list-template');

describe('list-template', function () {
    it('should throw an error when there are no elements', function () {
        const template = {
            recipientId: 1,
            buttons: [{}]
        };

        expect(() => new ListTemplate(template)).to.throw(Error);
    });

    it('should throw an error when element length is over 4', function () {
        const template = {
            recipientId: 1,
            buttons: [{}],
            elements: [{}, {}, {}, {}, {}]
        };

        expect(() => new ListTemplate(template)).to.throw(Error);
    });

    it('should throw an error when element length is under 2', function () {
        const template = {
            recipientId: 1,
            buttons: [{}],
            elements: [{}]
        };

        expect(() => new ListTemplate(template)).to.throw(Error);
    });

    it('should throw an error when button length is over 1', function () {
        const template = {
            recipientId: 1,
            buttons: [{}, {}],
            elements: [{}, {}, {}, {}]
        };

        expect(() => new ListTemplate(template)).to.throw(Error);
    });

    it('should throw an error when top element style is not large or compact', function () {
        const template = {
            recipientId: 1,
            buttons: [{}, {}],
            elements: [{}, {}, {}, {}],
            topElementStyle: 'fail'
        };

        expect(() => new ListTemplate(template)).to.throw(Error);
    });

    describe('static methods', function () {
        it('url button', function () {
            expect(ListTemplate.urlButton).to.be.a('function')
        });

        it('postback button', function () {
            expect(ListTemplate.postbackButton).to.be.a('function')
        });

        it('share button', function () {
            expect(ListTemplate.element).to.be.a('function')
        });
    });
});