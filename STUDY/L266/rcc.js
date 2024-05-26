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

const getJSON = function (url, errorMsg = "😡Fucked ") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const get3co = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // Taking array of promises
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].captal));
    console.log("Print Capitals");
    // console.log([data1.capital, data2.capital, data3.capital]);
  } catch (error) {
    console.log(error);
  }
};

console.log("Get 3 Countries");
get3co("spain", "ireland", "oman");
