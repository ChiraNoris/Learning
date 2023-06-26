let country = "Romania";
let continent = "Europe";
let population = "22.2";

console.log(country);
console.log(continent);
console.log(population);

let isIsland = country;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/
const marksWeights = 78;
const marksHeights = 1.69;
const johnsWeights = 92;
const johnsHeights = 1.95;

let marksBMI = marksWeights / (marksHeights * marksHeights);

let johnsBMI = johnsWeights / (johnsHeights * johnsHeights);

let markHigherBMI = marksBMI > johnsBMI;

console.log(marksBMI, johnsBMI, markHigherBMI);

const secondMarksWeights = 95;
const secondMarksHeights = 1.88;
const secondJohnsWeights = 85;
const secondJohnHeights = 1.76;

let secondMarksBMI =
  secondMarksWeights / (secondMarksHeights * secondMarksHeights);
let secondJohnBMI =
  secondJohnsWeights / (secondJohnHeights * secondJohnHeights);

let secondMarkHigherBMI = secondMarksBMI > secondJohnBMI;

console.log(secondMarksBMI, secondJohnBMI, secondMarkHigherBMI);

let myName = "Noris";
let birthYear = 1998;
let currentYear = 2023;
let currentAge = currentYear - birthYear;
let gender = "male";
let occupacion = "IT Development";
let description = `Hi I'm ${myName}, I'm a ${currentAge} years old, ${gender} student who is working in ${occupacion}`;
console.log(description);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

if (marksBMI > johnsBMI) {
  console.log(
    `Mark's BMI(${marksBMI}) is higher than John's BMI()${johnsBMI}!`
  );
} else if (marksBMI < johnsBMI) {
  console.log(
    `John's BMI(${johnsBMI}) is higher than Mark's BMI()${marksBMI}!`
  );
} else {
  console.log(`They have the same BMI`);
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let dolphinsFirstScore = 97;
let dolphinsSecondScore = 112;
let dolphinsThirdScore = 101;
let koalasFirstScore = 109;
let koalasSecondScore = 95;
let koalasThirdScore = 106;

let dolphinsAverageScore =
  (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
let koalasAverageScore =
  (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= 0 &&
  koalasAverageScore >= 0
) {
  console.log("It's a draw!");
} else if (
  dolphinsAverageScore > koalasAverageScore &&
  dolphinsAverageScore >= 100
) {
  if (dolphinsAverageScore >= 100) {
    console.log(`The team dolphins win with a ${dolphinsAverageScore} score`);
  } else {
    console.log("Due to a lack of points it's a draw");
  }
} else {
  if (koalasAverageScore >= 100) {
    console.log(`The team koalas win with a ${koalasAverageScore} score`);
  } else {
    console.log("Due to a lack of points it's a draw");
  }
}

let userChoice = "sunday";

if (userChoice === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (userChoice === "tuesday") {
  console.log("Prepare theory videos");
} else if (userChoice === "wednesday" || userChoice === "thursday") {
  console.log("Write code examples");
} else if (userChoice === "friday") {
  console.log("Record videos");
} else if (userChoice === "saturday" || userChoice === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Invalide day");
}

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let bill = 430;

let tipFor20 = bill * 0.2;
let tipFor15 = bill * 0.15;

if (bill >= 50 && bill <= 300) {
  console.log(
    `The bill was ${bill}, the tip was ${tipFor15}, and the total value ${
      bill + tipFor15
    }`
  );
} else {
  console.log(
    `The bill was ${bill}, the tip was ${tipFor20}, and the total value ${
      bill + tipFor20
    }`
  );
}
