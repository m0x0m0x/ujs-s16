"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// Exporting the html fragments into its own function

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

// Old chool way
const getCountryAndNei = function (country) {
  // AJAX call Country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);

    console.log(data);

    // Render Country 1
    renderCountry(data);

    // Get neighbor country (2)
    const [neig] = data.borders;
    if (!neig) return;

    // AJAX Call 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neig}`);
    request2.send();

    request2.addEventListener("load", function () {
      //   console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
};

getCountryAndNei("yemen");
// getCountryData("japan");
// getCountryData("syria");
