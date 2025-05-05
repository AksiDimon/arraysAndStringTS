function shortestWord(string: string): number {
 return Math.min(...string.split(' ').map(word => word.length)) 
}
const str = "lorem ipsum dolor sit amet";


console.log(shortestWord(str)); // 3
