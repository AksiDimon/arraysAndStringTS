function onlyDigits(str: string) {
    for(let char of str) {
        if(char < '0' || char > '9') {
            return false
        }
    }
    return true
}

console.log(onlyDigits("123")); // true
console.log(onlyDigits("qwerty")); // false
console.log(onlyDigits("5!")); // false
console.log(onlyDigits("2e2")); // false
