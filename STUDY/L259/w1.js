/* 
Actual work from the chapter
*/
console.log("Booty");
setTimeout(() => console.log("0 Sec Timer"), 0);

// This will have immediate resolution
Promise.resolve("Res1").then((res) => console.log(res));

// Another immediate promise resolution
Promise.resolve("pussy").then((pussy) => {
  for (let i = 0; i < 1000; i++) {
    console.log(`Number Panty ${i}`);
  }
  console.log(pussy);
});

console.log("Test End");
