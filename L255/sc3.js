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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
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

// Getting Json Function
const getJSON = function (url, errorMsg = "😡Fucked ") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Handling fulfiled response
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //country1
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`No Fuckiung Country Like that ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neig = data[0].borders[0];
//       const neig = "rape3";

//       if (!neig) return;

//       //   // Country neighbor - Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neig}`);
//     })
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`No Fuckiung Neighbor Like that ${response.status}`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((error) => {
//       console.error(error);
//       renderError(`FuckedUpBastard 🤬🤬 ${error.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// const getJSON = function (url, errorMsg = "😡Fucked ") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

const getCountryData = function (country) {
  // Handling fulfiled response

  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    "NoFuckingCountry😡😡"
  )
    .then((data) => {
      renderCountry(data[0]);
      // const neig = data[0].borders[0];
      const neig = "rape3";

      if (!neig) return;

      //   // Country neighbor - Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neig}`,
        "NoNeighBorBastard😡😡"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((error) => {
      console.error(error);
      renderError(`FuckedUpBastard 🤬🤬 ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("yemen");
});

// getCountryData("adadsdd");
