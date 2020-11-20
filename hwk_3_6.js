function splitString (string){
  
  let words = "";
  let newArr = [];
  for(let i = 0; i< string.length; i++){
    if(string[i] === "." || string[i] === "," || string[i] === "!" || string[i] === "?")
    continue
    if(string[i]!== " " ){
      words+=string[i]
      
    } else  {
      newArr.push(words)
      words = ""; 
    }
    
    
  }
  newArr.push(words) 
  return newArr
}