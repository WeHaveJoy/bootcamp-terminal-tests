module.exports = function findItemsOver20(list){ 
    var item= [];
    for(var i=0; i< list.length; i++){
        if(list[i].qty > 20){
        item.push(list[i]);
      }
    }
    return item;
  }