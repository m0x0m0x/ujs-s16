/* 
Ch 260: Work here
*/

// Import Zone
import { mainHead } from "./text.js";
import { consoleO } from "./pcol.js";

////////////////////

mainHead("Manually Building Promises");

// console.log("Fancy Panty");

// console.log("Sucking and fucking");
// /*
// Actual work from the chapter
// */
// console.log("Booty");
// setTimeout(() => console.log("0 Sec Timer"), 0);

// // This will have immediate resolution
// Promise.resolve("Res1").then((res) => console.log(res));

// // Another immediate promise resolution
// Promise.resolve("pussy").then((pussy) => {
//   // for (let i = 0; i < 1000; i++) {
//   //   console.log(`Number Panty ${i}`);
//   // }
//   console.log(pussy);
// });

// console.log("Test End");

// Continuing the work here
mainHead("Actual Work Here");

// Creating a lottery function

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery Happening ");
  setTimeout(function () {
    let lotNo = Math.random();
    consoleO("🔮");
    consoleO(lotNo);
    if (lotNo >= 0.5) {
      // Setting the promise as resolved with the resolve function
      resolve("💸 Win");
    } else {
      reject(new Error("😡 Lost"));
    }
  }, 1000);
});

// consuming
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
lotteryPromise.then((res) => consoleO(res)).catch((err) => consoleO(err));

// Promisify setTimeout into a wait function by promisyfying

// const wait = function (secs) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, secs * 1000);
//   });
// };

const wait = (secs) =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));

wait(2)
  .then(() => {
    console.log("Wait 1 Seconds");
    return wait(1);
  })
  .then(() => {
    console.log("Wait 2 Seconds");
    return wait(1);
  })
  .then(() => {
    console.log("Wait 3 Seconds");
    return wait(1);
  })
  .then(() => console.log("Waiting DOne"));

// Create rejectec promise immediaely

// Static Method on constructor
Promise.resolve("🫦 Promise Rsolved").then((x) => console.log(x));
Promise.reject(new Error("😡Promise Fucked")).catch((x) => console.log(x));
