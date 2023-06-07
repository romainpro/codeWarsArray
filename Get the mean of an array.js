function getAverage(marks){
    let sumArray = marks.reduce((a,b)=>a+b,0);
     return Math.floor(sumArray/marks.length)
  }