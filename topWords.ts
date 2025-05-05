// function topWords<Word extends readonly string[] >(words: Word, query: string, limit: number):Word[number][] {
//     const result: Word[number][] = [];
//     for(let word of words) {
//         if(word.toUpperCase().startsWith(query.toUpperCase())){
//             result.push(word);
//         }
//     }
//     return result.length < limit ? result : result.slice(0,limit)
// }

function topWords(words: string[], query: string, limit: number): string[] {
    const result = [];
    for(let word of words) {
        if(word.toUpperCase().startsWith(query.toUpperCase())){
            result.push(word);
        }
    }
    return result.length < limit ? result : result.slice(0,limit)
}

const words = [
    "a",
    "able",
    "about",
    "absolute",
    "accept",
    "account",
    "achieve",
    "across",
    "act",
    "active",
    "actual",
    "add",
    "address",
    "Admit",
    "Advertise",
    "Affect",
    "AFFORD",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "agent",
    "ago",
    "agree",
  ] // или использовать as const  для точных литералов, union type в закоментированной реализации функции topWords
  
  console.log(topWords(words, "Af", 3)); // ['Affect', 'AFFORD', 'after']
  console.log(topWords(words, "aga", 5)); // ['again', 'against']
  
  const res1 = topWords(words, "aga", 5)