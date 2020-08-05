let assert = require ("assert");
let greet = require ("../greet");

var greet = require('../greet');

describe('The greet function', function(){
    it ('should greet Sinovuyo', function(){
        console.log(greet("Sinovuyo"));
        assert.equal('Hello, Sinovuyo', greet('Sinovuyo'));

    });
    it ('should greet Anelisa', function(){
        
        assert.equal('Hello, Anelisa', greet('Anelisa'));
    });
    })