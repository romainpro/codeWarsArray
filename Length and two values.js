function alternate(n, firstValue,secondValue){
    let array =[];
    for (let i = 0; i < n;i++){
        array.push(i % 2 === 0 ? firstValue :secondValue);
    }
    return array
  }