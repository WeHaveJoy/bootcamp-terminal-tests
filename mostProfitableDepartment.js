module.exports = function mostProfitableDepartment(profitableDep){
    var depMap= {}
   
    for(var i=0; i< profitableDep.length; i++){
     var currentDep = profitableDep[i].department
     if(depMap[currentDep] === undefined){
     depMap[currentDep] = 0;
     }
      else{
      depMap[currentDep] += profitableDep[i].sales
      }
    }
    //console.log(depMap);
    var dep= '';
    var mostSales= 0;
    for( var props in depMap){
    if(depMap[props] > mostSales){
     dep= props;
      mostSales= depMap[props];
    }
    }
    console.log(dep);
    return dep;
  }
  
  
//   function mostProfitableDay(profitableDay){
//       var dayMap= {};
    
//    for(var i=0; i< profitableDay.length; i++){
//      var currentDay = profitableDay[i].day
//      if(dayMap[currentDay] === undefined){
//      dayMap[currentDay] = profitableDay[i].sales;
//      }
//       else{
//       dayMap[currentDay] += profitableDay[i].sales;
//       }
//     }
    
//   //console.log(dayMap)
//     var day= '';
//     var mostSales= 0;
//     for( var props in dayMap){
//     if(dayMap[props] > mostSales){
//      day= props;
//       mostSales= dayMap[props];
//     } 
//   }
//     console.log(day);
//     return day;
//   }