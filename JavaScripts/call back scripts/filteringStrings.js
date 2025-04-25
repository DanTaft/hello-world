const words = ["apple", "banana", "kiwi", "grape"];

function filterStrings(arr, callback) {
  return arr.filter(callback);
}

const longWords = filterStrings(words, (word) => word.length > 4);
console.log(longWords); // Output: ["apple", "banana"]