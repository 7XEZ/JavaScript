function getVowels(str) {
    const vowels = "aeiouAEIOU"; 
    let vowelsFound = "";
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelsFound += str[i];
      }
    }
    
    return vowelsFound;
  }
  
  const myString = "Hello,World";
  const vowelsInString = getVowels(myString);
  console.log(vowelsInString); 
  