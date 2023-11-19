/* complex_code.js */

// This is a complex JavaScript code that demonstrates a sophisticated, elaborate, and complex program.

// Utility function to generate a random number between two given numbers
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Generate an array of 10 random Person objects
const people = [];
for (let i = 0; i < 10; i++) {
  const age = getRandomNumber(18, 60);
  const name = `Person ${i + 1}`;
  people.push(new Person(name, age));
}

// Function to sort the people array based on their age in ascending order
const sortPeopleByAge = () => {
  people.sort((a, b) => a.age - b.age);
};

// Function to filter the people array based on their age being greater than 30
const filterPeopleByAge = () => {
  return people.filter(person => person.age > 30);
};

// Function to display the details of each person in the people array
const displayPeopleDetails = () => {
  people.forEach(person => console.log(person.getDetails()));
};

// Call the functions
console.log("Initial People Details:");
displayPeopleDetails();

console.log("\nSorted People Details:");
sortPeopleByAge();
displayPeopleDetails();

console.log("\nFiltered People Details (Age > 30):");
const filteredPeople = filterPeopleByAge();
filteredPeople.forEach(person => console.log(person.getDetails()));

// Another complex function which involves recursion and intermediate calculations
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("\nFibonacci Series (n = 10):");
for (let i = 0; i <= 10; i++) {
  console.log(fibonacci(i));
}

// ...
// More complex code can be added here
// ...

// End of complex_code.js