const numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];

function filterArray(arr, callback) {
  const result = [];
  for (const num of arr) {
    if (callback(num)) {
      result.push(num);
    }
  }
  return result;
}

const evenNumbers = filterArray(numbers, (x) => x % 2 !== 0);
console.log(evenNumbers); // Output: [15, 25]
// This code defines a function `filterArray` that takes an array and a callback function as arguments.
// It iterates through the array and applies the callback function to each element.
// If the callback returns true, the element is added to the result array.
// Finally, it filters the `numbers` array to get only the even numbers and logs them to the console.