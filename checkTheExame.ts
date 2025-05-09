
const corr = ['a','b','c','d',''] as const
type Options = typeof corr[number]
// type Options = 'a'|'b'|'c'|'d'|''
function checkExam<CA extends Options>(correctAnswers: CA[] , studentAnswers: CA[]): number {
    let result = 0;
    for(let i = 0; i < correctAnswers.length; i += 1) {
        if(correctAnswers[i] === studentAnswers[i]) {
            result += 4
        }
        if(correctAnswers[i] !== studentAnswers[i] && studentAnswers[i] !== '') {
            result -= 1
        }
        
    }
    return result < 0 ? 0 : result
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", "" ])); // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["b", "c", "b", "a"], ["" , "a", "a", "c"])); // 0

const res = checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])