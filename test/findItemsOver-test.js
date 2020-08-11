let assert = require ("assert");
let findItemsOver = require ("../findItemsOver");

//var findItemsOver = require('../findItemsOver');

describe("The find items over function ", function(){
  
    it ("should find items over", function() {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3}
        ];
        
      
        //results look like this now.
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27}
        ];
        var threshold = 20;

        assert.deepEqual(results, findItemsOver(itemList,threshold));
    });
});
