"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// Old chool way
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/yemen");
request.send();

request.addEventListener("load", function () {
  //   console.log(this.responseText);

  const [data] = JSON.parse(this.responseText);

  console.log(data);

  const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages.ara}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.YER.name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
});
