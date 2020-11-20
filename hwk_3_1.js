function str(words,sentence){
  let finalSentence = "";
  let index = 0;
  for(let i=0; i<sentence.length; i++){
    if(sentence[i]=== "_"){
      finalSentence+=words[index];
      index++
    } else{
      finalSentence+=sentence[i];
    }
  } 
  
  return finalSentence
}
console.log(str(["Houston", "problem"],"_, we have a _."))
