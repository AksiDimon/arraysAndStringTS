

function filterHomogenous<T>(array: unknown[][]) {
     return array.filter(arr => {
        if(arr.length === 0){
           return  null
        }
        return arr.every((val, index) => typeof val === typeof arr[0])
     } )
    let result = [];
    for(let arr of array) {
        if(arr.length === 0){
            continue
        }
        if(arr.every( val => typeof val === typeof arr[0])){
            console.log(arr)
            result.push(arr)
        }
    }
    return result
}



console.log(filterHomogenous([
    [2,22,44],
    [1, 2, 3],
    [],
    [5, true, 8],
    ["qwe", "yyy"],
    ["uio", 6],
  ])); // [[1, 2, 3],  ["qwe", "yyy"]]
  