function findCapitals(str: string) {
    const result = [];
    for(let i = 0; i < str.length; i += 1) {
        if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
            result.push(i)
        }
    }
    return result
}


console.log(findCapitals("MaxCode")); // [0, 3]









// function findCapitals(word) {
//     const result = []
//     for(let i = 0; i < word.length; i += 1){
//       if(word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90 || word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122) {
//         if(word[i] === word[i].toUpperCase()) {
//         console.log(word[i], word[i].toUpperCase())
//         result.push(i)
//       }
//       }
      
//     }
//     return result
//   }