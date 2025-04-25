const numbers = [1, 2, 3, 4, 5];

function processNumbers(arr, filterCallback, mapCallback) {
  return arr.filter(filterCallback).map(mapCallback);
}

const result = processNumbers(
  numbers,
  (x) => x > 2, // Filter numbers greater than 2
  (x) => x * 2  // Double the filtered numbers
);
console.log(result); // Output: [6, 8, 10]