function greet(name, callback) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    callback();
  }, 1000);
}

greet("Daniel", () => {
  console.log("This is the callback function.");
});
// Output:
// Hello, Daniel!
// This is the callback function.