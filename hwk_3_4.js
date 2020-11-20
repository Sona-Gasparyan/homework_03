function string(arr){
  let maxStr = arr[0].length;
  let minStr = arr[0].length;
  for(let i = 1; i<arr.length; i++){
    if (arr[i].length > maxStr)
    maxStr = arr[i].length;
  } 
  for(let j = 0; j< arr.length;j++){
    if(arr[j].length<minStr)
    minStr = arr[j].length;
  }
  return maxStr + minStr
}