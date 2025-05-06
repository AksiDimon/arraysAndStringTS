  type smallArr = string[];
function searchValue(array: string[][], minlength: number): boolean {
    const booleanTuple = []
    for(let i = 0; i < array.length; i += 1) {
        const isTrue =  array[i].some(word => word.length >= minlength)
        if(isTrue) {
            return true
        }
       
    }
    return false
}

const matrix = [
    ["lorem", "ipsum", "dolor", "sit", "amet"],
    ["consectetur", "adipiscing", "elit", "mauris", "urna"],
    ["mauris,", "accumsan", "quis", "mauris", "in"],
];

console.log(searchValue(matrix, 6)); // true
console.log(searchValue(matrix, 11)); // true
console.log(searchValue(matrix, 200)); // false


// function searchValue(matrix, min) {
//     const arrIsValid = []
//      for(const arr of matrix) {
//          arrIsValid.push(localSearch(arr, min))
//      }
//      return arrIsValid.includes(true) ? true : false
//  }
 
//  //функция ,проходит ли условие для одно массива?
//  function localSearch (arr, min) {
//      const findMatch =  arr.filter(word => word.length  >= min);
//      return findMatch.length > 0 ? true : false 
//  }
 
 