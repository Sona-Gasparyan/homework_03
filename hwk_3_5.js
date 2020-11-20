function findIndex(arr,value){
  let minValue ;
  let min ;
  for(let i = 0; i < arr.length; i++){
    if(value === arr[i]){
      return i;
    }
  }
  for (let j = 0; j < arr.length; j++){
    if (value !== arr[j]){
      minValue = Math.abs(value-arr[j])
      if(minValue === 1){
        return j
      } else {
        min = minValue
      }
    }
  }
  return j;
}
