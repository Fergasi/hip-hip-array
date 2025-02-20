/* This assignment will give you some practice with creating arrays and using their methods. */ 

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value. 

const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

  let count = 0;

  while (count < students.length) {
    console.log(students[count]);
    count++;
  } 

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];

  count = 0;
  grades.reverse();

  while (count < grades.length) {
    console.log(grades[count]);
    count++;
  }

// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

  count = 0;

  while (count < positiveNumbers.length) {
    if (positiveNumbers[count] % 2 === 0) {
      console.log(positiveNumbers[count])
    }
    count++;
  }

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  count = 0;

  while (count < mixedSignNumbers.length) {
    if (mixedSignNumbers[count] % 2 === 0) {
      console.log(mixedSignNumbers[count])
    }
    count++;
  }

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

  count = 0;

  symmetricalCapitals.shift();
  symmetricalCapitals.shift();
  symmetricalCapitals.pop()

  while (count < symmetricalCapitals.length) {
    console.log(symmetricalCapitals[count]);
    count++;
  }

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

  count = 0;

  fibonacciNumbers.unshift('0');
  fibonacciNumbers.push('21')
  fibonacciNumbers.push('34')

  while (count < fibonacciNumbers.length) {
    console.log(fibonacciNumbers[count]);
    count++;
  }

// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.

  const myFavouriteNumbers = [3,8,10,18,69];

  count = 0;

  while (count < myFavouriteNumbers.length) {
    console.log(myFavouriteNumbers[count]);
    count++;
  }

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.

  const myArray = [];

  myArray.push('24')
  myArray.push('27')
  myArray.unshift('31')
  myArray.unshift('35')
  myArray.unshift('38')

  count = 0;

  while (count < myArray.length) {
    console.log(myArray[count]);
    count++;
  }

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.

  count = 0;

  while (count <= 10) {

    if (count >= 3) {console.log(students[count])}

    count++;
  }

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.

  count = 3;

  let newnewstudentarray = [];

  while (count <= 10) {
    newnewstudentarray = newnewstudentarray.concat(students[count]);
    count++;
    
  }

  count = 0;

  while ( count < newnewstudentarray.length) {
    console.log(newnewstudentarray[count]);
    count++;
  }

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.

  count = 0;

  let studArray = students.slice(3,11);

  while (count < studArray.length) {
    console.log(studArray[count]);
    count++;
  }

  count = 0;

  while (count < students.length) {
    console.log(students[count]);
    count++;
  }

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

  dinosaurs.splice(4,3);

  count = 0;

  while (count < dinosaurs.length) {
    console.log(dinosaurs[count]);
    count++;
  }

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.

  let dinoString = dinosaurs.join("*")
  console.log(dinoString);

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

  dinosaurs.reverse();
  console.log(dinosaurs);

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

  let colours = primaries.concat(secondaries);
  count = 0;

  while (count < colours.length) {
    console.log(colours[count]);
    count++;
  }

  console.log(primaries);
  console.log(secondaries);