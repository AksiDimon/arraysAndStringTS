function smallEnough(array: number[], n: number) {
    // for(let num of array) {
    //    if(num > n) {
    //     return false
    //    }
    // }
    // return true
   
        const max = Math.max(...array);
        return max <= n
}

console.log(smallEnough([1, 2, 3], 5)); // true
console.log(smallEnough([-5, 5], 5)); // true
console.log(smallEnough([1, 12, 3], 5)); // false
