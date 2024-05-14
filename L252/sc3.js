// Code for 252
"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////// Actual Code here

// Code for rendering
const renderCountry = function (data, className = "") {
  const html = `
          <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.official}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 10000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${data.languages.ara}</p>
              <p class="country__row"><span>💰</span>${data.currencies.YER}</p>
            </div>
          </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

//Old method
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// Using Promises
const request = fetch("https://restcountries.com/v3.1/name/yemen");
console.log(request);

// const getCountryData = function (country) {
//   // Handling fulfiled response
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     }) // This catch error method is by you
//     .catch(function (error) {
//       console.log(error);
//     });
// };
const getCountryData = function (country) {
  // Handling fulfiled response
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]))
    .then((error) => console.log(error));
};
getCountryData("yemen");
