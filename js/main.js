//** array of images
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//* global
const cardsEl = document.getElementById("cards");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

//* insert images on page html
for (const object of images) {
  cardsEl.innerHTML += `
  <img class="inactive" src="${object.image}">
  <div class="card-text">
    <h1 class="title">${object.title}</h1>
    <p class="description">${object.text}</p>
  </div>
    `;
}

//* set first image to show
let currentImgIndex = 0;
document
  .getElementsByClassName("inactive")
  [currentImgIndex].classList.add("active");

//* set first title to show
let currentTitleIndex = 0;
document
  .getElementsByClassName("title")
  [currentTitleIndex].classList.add("active");

//* set first description to show
let currentTextIndex = 0;
document
  .getElementsByClassName("description")
  [currentTextIndex].classList.add("active");

//* next image button
nextBtn.addEventListener("click", function () {
  // image
  document
    .getElementsByClassName("inactive")
    [currentImgIndex].classList.remove("active");
  currentImgIndex++;
  document
    .getElementsByClassName("inactive")
    [currentImgIndex].classList.add("active");

  // title
  document
    .getElementsByClassName("title")
    [currentTitleIndex].classList.remove("active");
  currentTitleIndex++;
  document
    .getElementsByClassName("title")
    [currentTitleIndex].classList.add("active");

  // description
  document
    .getElementsByClassName("description")
    [currentTextIndex].classList.remove("active");
  currentTextIndex++;
  document
    .getElementsByClassName("description")
    [currentTextIndex].classList.add("active");
});

//* previous image button
prevBtn.addEventListener("click", function () {
  // image
  document
    .getElementsByClassName("inactive")
    [currentImgIndex].classList.remove("active");
  currentImgIndex--;
  document
    .getElementsByClassName("inactive")
    [currentImgIndex].classList.add("active");

  // title
  document
    .getElementsByClassName("title")
    [currentTitleIndex].classList.remove("active");
  currentTitleIndex--;
  document
    .getElementsByClassName("title")
    [currentTitleIndex].classList.add("active");

  // description
  document
    .getElementsByClassName("description")
    [currentTextIndex].classList.remove("active");
  currentTextIndex--;
  document
    .getElementsByClassName("description")
    [currentTextIndex].classList.add("active");
});
