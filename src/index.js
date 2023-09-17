function doubleLetterinWord(str) {
    let doubleStr = ""; 
    for (let i = 0; i < str.length; i++) { 
      const char = str.charAt(i); 
  
      doubleStr += char + char; 
    }
    return doubleStr; 
  }
  
  const originalStr = "hello";
  const resultStr = doubleLetterinWord(originalStr);

  console.log(resultStr); 
  