
function formatWords<T>(...string: T[]) {
    if(string.length === 0) {
        return ''
    }
    if(string.length === 1) {
        return string[0]
    }
    let result = ''
    for(let i = 0; i < string.length; i += 1) {

         if (i === string.length - 2 ) {
            // console.log('if 2')
            result = result + ` ${string[i]} and`
        }else {
            // console.log('else')
            result += ` ${string[i]},`
        }
    }
    return string.length >= 2 ? result.slice(1,-1) : result
}


console.log(formatWords()); // ""
console.log(formatWords("Natalie")); // "Natalie"
console.log(formatWords("Natalie", "Mila")); // "Natalie and Mila" 
console.log(formatWords("Natalie", "Mila", "Vincent")); // "Natalie, Mila and Vincent"
console.log(formatWords("Natalie", "Mila", "Vincent", "Barbara")); // "Natalie, Mila, Vincent and Barbara"  Natalie, Mila, Vincent and Barbara


// function formatWords(...args) {
//     let result = ''
//     if(args.length === 0) {
//       return ''
//     }
//     if(args.length === 1) {
//       return args[0]
//     }
//     if(args.length === 2) {
//       return `${args[0]} and ${args[1]}`
//     }
  
//     for(let i = 0; i < args.length - 1; i += 1) {
//       result = result + args[i] + ', '
//     }
//     // console.log(result.at(-1), '💢')
//     result =  result.slice(0,-2);
//     result = result + ' and ' + args[args.length - 1]
    
//     return result
//   }