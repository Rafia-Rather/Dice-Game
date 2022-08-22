
let randomNumber1 = Math.floor(Math.random()*6) + 1;

let randImage1 = `dice${randomNumber1}.png`;

document.querySelector(".img1").setAttribute("src", `images/${randImage1}`)

let randomNumber2 = Math.floor(Math.random()*6) + 1;

let randImage2 = `dice${randomNumber2}.png`;

document.querySelector(".img2").setAttribute("src", `images/${randImage2}`)

let title = document.querySelector(".title");

if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player1 Wins!";

}
else if (randomNumber2 > randomNumber1) {
  title.innerHTML = "Player2 Wins!";

}
else {
  title.innerHTML = "Draw!"

}
