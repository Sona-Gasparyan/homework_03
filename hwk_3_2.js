function findNum (arr){
  let result;
  let even = []
  let odd = []
  for(let i = 0; i < arr.length;i++){
    if( typeof(arr[i]) === "number"){
      if(arr[i]%2===0)
      even.push(arr[i])
      if(arr[i]%2===0) continue
      odd.push(arr[i])
    }           
  }
  
  if(odd === []){
    result = even
  } else {
    result = odd.concat(even)
  }
  return result
  
}

console.log(findNum([100,50,81,7,3] ))