// Code for 252
"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////// Actual Code here

//Old method
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// Using Promises
const request = fetch("https://restcountries.com/v3.1/name/yemen");
console.log(request);
