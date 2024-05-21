/* 
Ch 260: Work here
*/

// Import Zone
import { mainHead } from "./text.js";
import { console, originalConsoleLog } from "./pcol.js";
////////////////////

mainHead("Manually Building Promises");

// console.log("Fancy Panty");

console("Sucking and fucking");
/* 
Actual work from the chapter
*/
originalConsoleLog("Booty");
setTimeout(() => console.log("0 Sec Timer"), 0);

// This will have immediate resolution
Promise.resolve("Res1").then((res) => originalConsoleLog(res));

// Another immediate promise resolution
Promise.resolve("pussy").then((pussy) => {
  for (let i = 0; i < 1000; i++) {
    originalConsoleLog(`Number Panty ${i}`);
  }
  originalConsoleLog(pussy);
});

console.log("Test End");
