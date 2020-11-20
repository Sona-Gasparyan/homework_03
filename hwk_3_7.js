function num(arr){
  let newArr = []
  let min = Infinity
  let max = 0
  for(let i = 0; i< arr.length;i++){
    if(arr[i]>=max){
      max = arr[i];
    } 
    if(arr[i]<min){
      min = arr[i]
    }
  }
  for(let j = min; j<=max;j++){
    if(arr.indexOf(j)===-1 ){
      newArr.push(undefined)
    } else{
      newArr.push(j);
    }
  }
  
  
  return newArr;
}

console.log (num([26, 30, 19, 5]))