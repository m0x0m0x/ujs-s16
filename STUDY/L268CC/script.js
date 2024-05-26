// Solution with the image path

"use strict";

// Wait function which was made
const wait = (secs) =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("🤬FuckerNoImage"));
    });
  });
};

let curImg;

createImage("img/1.png")
  .then((img) => {
    curImg = img;
    console.log("Img1Loaded");
    return wait(2);
  })
  .then(() => {
    curImg.style.display = "none";
    return createImage("img/2.jpg");
  })
  .then((img) => {
    curImg = img;
    console.log("Img2Loaded");
    return wait(2);
  })
  .catch((err) => console.error(err));
