function reduceArray(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (const value of arr) {
    accumulator = callback(accumulator, value);
  }
  return accumulator;
}

const sum = reduceArray([1, 2, 3, 4], (acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10