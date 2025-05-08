function pivotIndex(array: number[]) {
    let sumLeft = 0;
    // let sumRight = 0;

    for(let i = 0; i < array.length; i += 1) {
        sumLeft += array[i];
        let sumRight = 0;
        for(let j = array.length - 1; j >= 0; j -= 1) {
            sumRight += array[j];
            if(sumLeft === sumRight && j === i) {
                return i
            }
        }
        
    }
    return -1
}


//            0  1  2  3  4  5  6
//           -----------     ----
const arr1 = [4, 2, 1, 3, 7, 6, 4];


console.log(pivotIndex(arr1))
console.log(pivotIndex(arr1) === 4)


const arr2 = [4, 2, -5, 3];

console.log(pivotIndex(arr2) === 0)


