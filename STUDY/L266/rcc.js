/* 
Coding Challenge 
-------
KodaPusyy = 
833177806482088831396x107013
*/

// Import statements
// import { mainHead } from "../../UTILS/text.js";

// Old Code
const countriesContainer = document.querySelector(".countries");
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

// Need this fucker for ass fucking
const gApi = "833177806482088831396x107013";

const whereAmI = function (lat, lang) {
  fetch(`https://geocode.xyz/${lat},${lang}?geoit=json&auth=${gApi}`)
    .then((res) => {
      if (!res.ok) throw new Error(`Fucked ${res.status}`);
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(
        `
      %cYou are in %c${data.city}, %c${data.country}
      `,
        "color:blue;font-size:1rem;background-color:black",
        "color:red;background-color:black",
        "color:green;background-color:black"
      );
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`NoKunt ${res.status}`);
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`🪫${err.message}`));
};

whereAmI(52.508, 13.381);
whereAmI(11.037, 7.873);
whereAmI(121.58, 322.381);

// mainHead("L263 Work here");

/*
The async await function is syntactic sugar for this
fetch(`https://restcountries.com/v3.1/name/${country}`)
then(res => console.log(res))
*/

const whereAmI2 = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(res);
    const data = await res.json();
    console.log("rendering with async");
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.log("fucked");
  }
};
whereAmI2("germany");
console.log("1stBoob");

// Try catch error
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   console.error(err);
// }
