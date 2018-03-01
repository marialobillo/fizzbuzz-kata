const assert = require('chai').assert;
const FizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz Kata', function(){
	it('Should return a given number as a string', () => {
		assert.typeOf(FizzBuzz.fizzbuzz(1), 'string');
	});

	it('should return FIZZ if number is divisible by 3', () => {
		assert.equal(FizzBuzz.fizzbuzz(6), 'FIZZ');
		assert.equal(FizzBuzz.fizzbuzz(9), 'FIZZ');
		assert.equal(FizzBuzz.fizzbuzz(12), 'FIZZ');
	});

	it('should return BUZZ if number is divisible by 5', () => {
		assert.equal(FizzBuzz.fizzbuzz(10), 'BUZZ');
	});

	it('should return FIZZBUZZ if number is divisible by 3 and 5', () => {
		assert.equal(FizzBuzz.fizzbuzz(15), 'FIZZBUZZ');
	});

});
