import { sumArray } from "./index.mjs";
import { roadTrip } from "./main.mjs";

// Call sumArray with an array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log("Sum of numbers:", sumArray(numbers));

// Call roadTrip with appropriate arguments for speed and mpg
const tripInfo = roadTrip(60, 30); // Example: 60 mph and 30 mpg
console.log("Road Trip Information:", tripInfo);
