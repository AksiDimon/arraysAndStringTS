type ticket = [string, number]
function bingo (arraysTickets: ticket[]) {
    let count = 0;
    for(let [str, num] of arraysTickets) {
        if(str.split('').some(char => char.charCodeAt(0) === num)) {
            count += 1
        }
    }
    return count
}
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 89]])); // 2 

// function bingo(arrs) {
//     let count = 0;
//     for(let arr of arrs) {
//       const [str, num] = arr;
//       const isWin = str.split('').some(char => {
//        console.log(char.charCodeAt(), num, char , '📌') 
//         return char.charCodeAt() === num
//       })
//       if(isWin) {
//         count += 1
//       }
//     }
//     return count
//   }