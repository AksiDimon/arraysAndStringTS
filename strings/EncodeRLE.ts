function encodeRLE(str: string) {
    let result = ''
    let index = 1;
    for(let i = 0; i < str.length; i += 1) {
        if(str[i] !== str[i + 1]) {
            const add = index === 1 ? str[i] : str[i] + index.toString()
            result = result  + add
            index = 0;
        }
        index += 1

    }
    return result
}
console.log(encodeRLE("aabbbccccc")); // "a2b3c5"
console.log(encodeRLE("aaaaaaaaaax")); // "a10x"





// function encodeRLE(str) {
//     const result = [];
//     let i = 0;
//     let index = 0;
//     while (i < str.length) {
//       index += 1
//       if(str[i] !== str[i + 1]) {
//           result.push(str[i])
//           if(index > 1) {
//               result.push(index)
//           }
          
//           index = 0
//       }
//       i += 1
//     }
//     return result.join('')
//   }