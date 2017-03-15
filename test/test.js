global.faker = require('faker');
global.chai = require('chai');
global.assert = chai.assert;
global.expect = chai.expect;
global.should = chai.should();

const templateTester = require('./template-tester');

require('./../templates/test/test');

describe('custom templates', function () {
    templateTester('button-template-example', require('./../app/topics/examples/button-template-example'));
    templateTester('generic-template-example', require('./../app/topics/examples/generic-template-example'));
    templateTester('get-started-example', require('./../app/topics/examples/get-started-example'));
    templateTester('list-template-example', require('./../app/topics/examples/list-template-example'));
    templateTester('quick-reply-example', require('./../app/topics/examples/quick-reply-example'));
    templateTester('quick-reply-example-option1', require('./../app/topics/examples/quick-reply-example/option1'));
    templateTester('quick-reply-example-option2', require('./../app/topics/examples/quick-reply-example/option2'));
    templateTester('quick-reply-example-location', require('./../app/topics/examples/quick-reply-example/location'));
    templateTester('text-message-example', require('./../app/topics/examples/text-message-example'));
});