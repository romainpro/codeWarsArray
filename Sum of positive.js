function positiveSum(arr) {
    const arrayClean = []
   for (let i = 0 ;i <arr.length;i++){
     if(arr.length == 0){
       return 0
     }
     else if(arr[i]>=0){
        arrayClean.push(arr[i])
       }
   }
    console.log(arrayClean)
    let arrayTotal = arrayClean.reduce((a,b)=>a+b ,0);
    return arrayTotal
  }


