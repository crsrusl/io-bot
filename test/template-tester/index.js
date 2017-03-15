module.exports = (name, template) => describe(name, function () {
    it('should not throw an error', function () {
        expect(template(1)).to.be.an('object');
    });
});