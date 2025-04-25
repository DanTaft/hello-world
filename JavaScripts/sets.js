// Sets are collections of unique values
// They are similar to arrays but do not allow duplicate values
// Sets are iterable, meaning you can loop through them
// You can create a set using the Set constructor

// categorization 
const tags = new Set();
tags.add("JavaScript");
tags.add("Programming");
tags.add("JavaScript"); // Duplicate, won't be added
console.log(tags); // Set { 'JavaScript', 'Programming' }

// You can also create a set from an array
const fruits = new Set(["apple", "banana", "orange", "apple"]);
console.log(fruits); // Set { 'apple', 'banana', 'orange' }
// You can check if a value exists in a set using the has() method
console.log(fruits.has("banana")); // true
console.log(fruits.has("grape")); // false
// You can remove a value from a set using the delete() method
fruits.delete("banana");
console.log(fruits); // Set { 'apple', 'orange' }
// You can clear all values from a set using the clear() method
fruits.clear();
console.log(fruits); // Set {}

// removing duplicates from an array
// You can use a set to remove duplicates from an array
// This is a common use case for sets
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// membership checking, 
const visitors = new Set();
visitors.add("user1");
visitors.add("user2");
visitors.add("user1"); // Duplicate, won't be added again
console.log(visitors.size); // 2