type Flag = 'Like' | 'Dislike' | 'Nothing';

function likeOrDislike(array: Flag[]) {
  let result = 'Nothing';
  for (let current of array) {
    // current === result ? result =  "Nothing" : result = current
    if (current === result) {
      result = 'Nothing';
    } else {
      result = current;
    }
  }
  return result;
}

console.log(likeOrDislike(['Dislike'])); // "Dislike"
console.log(likeOrDislike(['Like', 'Like'])); // "Nothing"
console.log(likeOrDislike(['Dislike', 'Like'])); // "Like"
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])); // "Nothing"
console.log(likeOrDislike(['Like', 'Like', 'Like'])); // "Like"
