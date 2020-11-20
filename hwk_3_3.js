function calc(arr){
  let string = 0;
  let number = 0;
  for(let i = 0; i< arr.length; i++){
    if(typeof(arr[i])=== "string") {
      string++
    } else {
      number++
    }
  }
  return `Strings:${string} and Numbers:${number}`;
}
console.log(calc([1, 4, "i am a string", "465"]))
