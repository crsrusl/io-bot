const GenericTemplate = require('./../generic-template');

describe('generic-template', function () {
    it('should throw an error if there are more than 10 elements', function () {
        let template = {
            recipientId: 1,
            elements: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        };

        expect(() => new GenericTemplate(template)).to.throw(Error);
    });

    it('should throw an error if there is less than 1 element', function () {
        let template = {
            recipientId: 1,
            elements: []
        };

        expect(() => new GenericTemplate(template)).to.throw(Error);
    });

    it('should throw an error if there are no elements', function () {
        let template = {
            recipientId: 1
        };

        expect(() => new GenericTemplate(template)).to.throw(Error);
    });

    describe('static methods', function () {
        it('url button', function () {
            expect(GenericTemplate.urlButton).to.be.a('function')
        });

        it('postback button', function () {
            expect(GenericTemplate.postbackButton).to.be.a('function')
        });

        it('call button', function () {
            expect(GenericTemplate.callButton).to.be.a('function')
        });

        it('share button', function () {
            expect(GenericTemplate.shareButton).to.be.a('function')
        });
    });
});
