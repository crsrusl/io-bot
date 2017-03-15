const BaseTemplate = require('./../base-template');

describe('base-template', function () {
    it('should throw an error if there is no recipient ID', function () {
        expect(() => new BaseTemplate()).to.throw(Error);
    });

    it('should return json on the render method', function () {
        const template = new BaseTemplate({recipientId: 1});

        expect(template.render()).to.be.a('object');
    });

    describe('static methods', function () {

        it('url button', function () {
            expect(BaseTemplate.urlButton).to.be.a('function');
        });

        it('postback button', function () {
            expect(BaseTemplate.postbackButton).to.be.a('function');
        });

        it('call button', function () {
            expect(BaseTemplate.callButton).to.be.a('function');
        });

        it('share button', function () {
            expect(BaseTemplate.shareButton).to.be.a('function');
        });

        it('element', function () {
            expect(BaseTemplate.element).to.be.a('function');

        });

        it('list element', function () {
            expect(BaseTemplate.listElement).to.be.a('function');
        });

        it('quick reply', function () {
            expect(BaseTemplate.quickReply).to.be.a('function');
        });

        it('location quick reply', function () {
            expect(BaseTemplate.locationQuickReply).to.be.a('function');
        });
    });
});