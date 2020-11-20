function sumOfArr(arr){
  let result;
  let sum = 0;
  let newArr = [];
    for(let i = 0; i<arr.length;i++){
    for(let j = 0; j < arr[i].length;j++){
      sum+= arr[i][j];
    }
   result = sum;
    sum = 0;
    newArr.push(result);
  }
  return newArr;
}

console.log(sumOfArr([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]))