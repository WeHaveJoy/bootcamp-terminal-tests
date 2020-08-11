module.exports = function isWeekday(weekDay){
    if(weekDay.startsWith('Monday') || weekDay.startsWith('Tuesday') || weekDay.startsWith('Wednesday') || weekDay.startsWith('Thursday') || weekDay.startsWith('Friday')){
    return weekDay;
    }
     else {
     return "is not a weekday";
     } 
    
    }