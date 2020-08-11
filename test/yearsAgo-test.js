let assert = require ("assert");
let yearsAgo = require ("../yearsAgo");

//var yearsAgo = require('../yearsAgo');

describe("The yearsAgo function ", function(){
  
    it ("should say how many years ago", function() {

        var numOfYears = 2;
      
        assert.equal(2018, yearsAgo(numOfYears));
    });
  
    
    
});
