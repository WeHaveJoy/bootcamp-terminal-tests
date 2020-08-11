let assert = require ("assert");
let findItemsOver20 = require ("../findItemsOver20");

//var findItemsOver20 = require('../findItemsOver20');

describe("The find items over 20 function ", function(){
  
    it ("should find items over 20", function() {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        // var results = findItemsOver(itemList, 25)
        //results look like this now.
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        

        assert.deepEqual(results, findItemsOver20(itemList));
    });
  
});
