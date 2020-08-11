module.exports = function findItemsOver(itemList,threshold){
    var item= [];
    //console.log(threshold);
    
    for(var i=0; i<itemList.length; i++ ){
       if(itemList[i].qty > threshold){
       item.push(itemList[i]);
       }
    }
    return item;
  }