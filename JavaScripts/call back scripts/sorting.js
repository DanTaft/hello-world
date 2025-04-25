const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

people.sort((a, b) => a.age - b.age);
console.table(people);
// Output: [{ name: "Bob", age: 20 }, { name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

//const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 30 },
    ];
    
  /*  people.sort((a, b) => a.age - b.age);
    
    // Display the sorted list in a readable format
    console.table(people);
    // Or, alternatively:
    people.forEach(person => {
      console.log(`Name: ${person.name}, Age: ${person.age}`);
    });
    */
// Output: [{ name: "Bob", age: 20 }, { name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]