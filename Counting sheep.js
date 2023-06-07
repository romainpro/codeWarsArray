function countSheeps(arrayOfSheep) {
    let value = 0;
    for(let i = 0 ;i < arrayOfSheep.length ;i++){
      if(arrayOfSheep[i]===true){
        console.log(arrayOfSheep[i])
        value +=1;
      }
      }
    return value
  }
  