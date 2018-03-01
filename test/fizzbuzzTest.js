const assert = require('chai').assert;
const FizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz Kata', function(){
	it('Should return a given number as a string', () => {
		assert.equal(FizzBuzz.fizzbuzz(1), '1');
	});
});
