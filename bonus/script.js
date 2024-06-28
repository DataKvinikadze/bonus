url = "https://api.chucknorris.io/jokes/random";

let fetchBtn = document.getElementById("fetchButton");
let totalCount = document.querySelector(".total");
let counter = 0;

let jokeShown = false;

let DislikeBtn = document.getElementById("thumbsDownButton");
let likeBtn = document.getElementById("thumbsUpButton");

totalCount.textContent = "Total Likes/Dislike: ";

fetchBtn.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let joke = document.querySelector(".joke-span");
      joke.textContent = data.value;
      jokeShown = true;
    });
});

DislikeBtn.addEventListener("click", () => {
  counter--;
  totalCount.textContent = `Total Likes/Dislike: ${counter}`;
});

likeBtn.addEventListener("click", () => {
  counter++;
  totalCount.textContent = `Total Likes/Dislike: ${counter}`;
});
