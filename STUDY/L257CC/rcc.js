/* 
Coding Challenge 
-------
KodaPusyy = 
833177806482088831396x107013
*/

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
    });
};

whereAmI(52.508, 13.381);
whereAmI(10.037, 72.873);
whereAmI(22.58, 33.381);
