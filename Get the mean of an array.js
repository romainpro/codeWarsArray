function getAverage(marks){
    let sumArray = marks.reduce((a,b)=>a+b,0);
     return Math.round(sumArray/marks.length)
  }