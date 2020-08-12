const assert = require('assert');
const Math = require('../src/math.js');
const { expect } = require('chai');
const sinon = require('sinon');

let value = 0;

describe('Math class', function () {

    // hooks
    beforeEach(function () {
        value = 0;
    });

    it('Sum two numbers', function () {
        const math = new Math;

        value = 5;

        // assert.equal(math.sum(5, value), 10);

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
        })
    });

    it('Multi two numbers', function (done) {
        const math = new Math;
        this.timeout(3500);

        math.multi(2, value, function (value) {
            //assert.equal(value, 0);
            expect(value).to.equal(0);
            done();
        })
    });

    it('Divider values ');

    it/*.only*/('Calc average', function () {
        const math = new Math;

        //assert.equal(math.avg(7, 9, 7, 8, value), 6.2);

        expect(math.avg(7, 9, 7, 8, value)).to.equal(6.2);
    });

    it.skip('Divider numbers', function () {
        const math = new Math;
        
        // assert.equal(math.divider(10, 5), 2);
        expect(math.divider(10, 5)).to.equal(2);
    });

    it('Compare objects', function () {
        const obj = {
            name: 'Airton',
            ['email']: '',
            age: undefined
        }

        const obj2 = {
            name: 'Airton',
            email: '',
            age: undefined,
        }

        expect(obj).to.haveOwnProperty('name');
        expect(obj).to.have.property('email');
        expect(obj).to.have.haveOwnProperty('age').equal(undefined);
        expect(obj).to.deep.equal(obj2);
    });

    it('Calls res with sum and index values', function () {
        const req = {};
        const res = {
            load: sinon.spy()
        };

        const math = new Math;

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][1]).to.equal(10);
    });
})