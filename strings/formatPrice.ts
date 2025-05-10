function formatPrice(number: number) {
    const price = String(number);
    //  console.log(price)
    if(price.length <= 3) {
        return price
    }
    
    let result = ''
    let index = 0;
    for(let i = price.length - 1; i >= 0; i -=1 ) {
        if(index === 3) {
            result = ' ' + result
            index = 0
        }
        
        result = price[i] + result
        index += 1
    }
    return result
    // return result;
}

console.log(formatPrice(100)); // "100"
console.log(formatPrice(2000)); // "2 000"
console.log(formatPrice(345678)); // "345 678"
console.log(formatPrice(1000000)); // "1 000 000"
console.log(formatPrice(1234567890)); // "1 234 567 890"



// function formatPrice(price) {
//     let  str = price.toString();

//     const arr = []
//     while (str.length > 0) {
//         arr.unshift(str.slice(-3)) //отрезую с конца строки с -3 и до конца слова
//         str = str.slice(0,-3) // оставляю от первого символа до - 3 в строке. и так отрезаем пока в цикле while не дойдет до нуля длинна слова.
//     }
//     console.log(arr)
//     return arr.join(' ');
    
// }