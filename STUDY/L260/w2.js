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
      reject("😡 Lost");
    }
  }, 1000);
});

// consuming
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
lotteryPromise.then((res) => consoleO(res)).catch((err) => consoleO(err));
