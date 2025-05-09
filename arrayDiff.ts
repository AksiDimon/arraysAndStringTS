function arrayDiff(arr1: number[], arr2: number[]) {
    const arr1Sl = [];
    for(let i = 0; i < arr1.length; i += 1) {
        if(!(arr2.includes(arr1[i]))) {
            arr1Sl.push(arr1[i])
        }
    }
    return arr1Sl
}
console.log(arrayDiff([1, 2, 3, 4, 5, 6], [4, 6, 8, 0,])); // [1, 2, 3, 5]
console.log(arrayDiff([3, 1, 1, 1, 1, 2, 2, 2], [4, 4, 2, 7, 8, 8])); // [3, 1, 1, 1, 1] 


// function arrayDiff(arr1, arr2) {
//     const toRemove = new Set(arr2);
//     return arr1.filter(el => !toRemove.has(el));
//   }