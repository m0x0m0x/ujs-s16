"use strict";

const consoleOutput = document.getElementById("console-output");

const originalConsoleLog = console.log;
const customConsoleLog = (...args) => {
  originalConsoleLog(...args); // Call the original console.log()

  const log = args
    .map((arg) => JSON.stringify(arg, null, 2))
    .join(" ")
    .replace(/\"/g, "&quot;");
  consoleOutput.innerHTML += `${log}\n`;
};

export { customConsoleLog as console };
