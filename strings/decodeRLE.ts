
function decodeRLE(str: string) {
    let result = ''
    let arrNums = [];
     let arrStr = []
    let quantity = '';

    for(let i = str.length - 1; i >= 0; i-= 1) {
        if(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) {
            quantity = str[i] + quantity;
         }
        //  if(str[i + 1].charCodeAt(0) >= 48 && str[i + 1].charCodeAt(0) <= 57) {
            
        //  }
         if( str[i].charCodeAt(0) < 48 || str[i].charCodeAt(0) > 57) {
            arrStr.push(str[i]);
            arrNums.push(Number(quantity) );
            quantity = ''
         }
    }
    arrNums.reverse();
    arrStr.reverse();

    for(let i = 0; i < arrStr.length; i += 1) {
        result = result + arrStr[i].repeat(arrNums[i] === 0 ? 1 : arrNums[i])
    }

    console.log(arrNums, arrStr)
    // for(let i = 0; i < str.length; i += 1) {
    //     if( str[i].charCodeAt(0) < 48 || str[i].charCodeAt(0) > 57) {
    //         console.log(str[i], '📕')
    //         result.push({[str[i]]: 0})
    //     } else if(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) {
             
    //         quantity += str[i]
    //         console.log(quantity, '!')
    //     } else {
    //             result[str[i]] = quantity
    //         quantity = ''
    //     } 
    // }
    return result
}





console.log(decodeRLE("a41b6c3")); // "aaaabbbbbbccc"
// console.log(decodeRLE("a10b2")); // "aaaaaaaaaabb"
console.log(decodeRLE("abc")); // "abc"
console.log(decodeRLE("abc11")); // "abccccccccccc"



// function decodeRLE(str) {
//     let res = '';
//     let num = ''
//     for(let i = 0; i < str.length; i += 1) {
//         if(str[i] < '0' || str[i] > '9' ) {
//             res += str[i]
//         } 
//         if(str[i] >='0' && str[i] <= '9' && str[i + 1] >='0' && str[i + 1] <= '9') {
//             // res.slice(0,-1)
//                 num += str[i] + str[i + 1] 
//                 res += str[i - 1].repeat(Number(num) - 1)
//                 num = ''
//                 i += 1
//         }
//          else if(str[i] >='0' && str[i] <= '9') {
//             // res.slice(0,-1)
//             num += str[i]
//             // console.log(str[i], i);
//             res += str[i - 1].repeat(Number(num) - 1)
//             num =  ''
//         } 
       
        
//     }
//     // console.log(res)
//      return res
// }