
function max (arr: number[]): number {
    let maxNum = -Infinity;
    for(let num of arr) {
        
        if(num > maxNum) {
            maxNum = num
        }
    }
    return maxNum
}
console.log(max([3, 6, 1, 5])); // 6
