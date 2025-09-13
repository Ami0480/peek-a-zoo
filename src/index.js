let timeUp = false;
let holes = document.querySelectorAll(".hole");
let lastHole;
let scoreBoard = document.querySelector(".score");
let score = 0;

function startGame() {
  timeUp = false;
  score = 0;
  scoreBoard.textContent = score;
  popUp();
  setTimeout(endGame, 10000);
}

function endGame() {
  timeUp = true;
}

function popUp() {
  let hole = randomHole(holes);
  let time = randomTime(300, 1000);
  hole.classList.add("up");
  setTimeout(function () {
    hole.classList.remove("up");
    if (timeUp == false) {
      popUp();
    }
  }, time);
}

function randomHole(holes) {
  let idx;
  let hole;
  do {
    idx = Math.floor(Math.random() * holes.length);
    hole = holes[idx];
  } while (hole === lastHole);
  lastHole = hole;
  return hole;
}

function smash(cupcake) {
  console.log("smashed!");
  cupcake.parentNode.classList.remove("up");
  score = score + 1;
  scoreBoard.textContent = score;
}

function randomTime(min, max) {
  let time = Math.round(Math.random() * (max - min) + min);

  return time;
}
