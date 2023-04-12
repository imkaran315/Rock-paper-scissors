let score = {};
retreiveScore();

function retreiveScore() {
  const savedScore = JSON.parse(localStorage.getItem("score"));
  console.log(savedScore);
  if (savedScore===null) {
    score = {
      Win: 0,
      Lose: 0,
      Ties: 0,
    };
    
  } else {
    score=savedScore;
  }
  updateScore();
}

function saveScore() {
  localStorage.setItem("score", JSON.stringify(score));
}


function playGame(playerMove) {
  const computerMove = getComputerMove();

  const result = document.querySelector(".js-result");
  let resultvariable = "";

  if (playerMove === "Rock") {        //rock move
    if (computerMove === "Rock") {
      resultvariable = "Tie";
    } else if (computerMove === "Scissor") {
      resultvariable = "Won";
    } else {
      resultvariable = "Lost";
    }
  } else if (playerMove === "Paper") {          //papermove
    if (computerMove === "Rock") {
      resultvariable = "Won";
    } else if (computerMove === "Scissor") {
      resultvariable = "Lost";
    } else {
      resultvariable = "Tie";
    }
  } else {                                        //scissors move
    if (computerMove === "Rock") {
      resultvariable = "Lost";
    } else if (computerMove === "Scissor") {
      resultvariable = "Tie";
    } else {
      resultvariable = "Won";
    }
  }
  updateResult(resultvariable);
  showMove(playerMove, computerMove);
  updateScore();
  saveScore();
}

function getComputerMove() {
  const num = Math.random();
  if (num >= 0 && num < 1 / 3) return "Rock";
  else if (num >= 1 / 3 && num < 2 / 3) return "Paper";
  else return "Scissor";
}

function updateResult(resultvariable) {
  const result = document.querySelector(".js-result");
  if (resultvariable === "Won") {
    result.innerText = "You won";
    score.Win++;
  } else if (resultvariable === "Lost") {
    result.innerText = "You Lost. Computer won.";
    score.Lose++;
  } else {
    result.innerText = "Tie";
    score.Ties++;
  }
}

function showMove(playerMove, computerMove) {
  const moves = document.querySelector(".js-moves");
  moves.innerText = `Your move: ${playerMove} \nComputer move: ${computerMove}`;
}
function updateScore() {
  const finalScore = document.querySelector(".js-score");
  finalScore.innerText = `Win=${score.Win}, Lose=${score.Lose}, Ties=${score.Ties}`;
}

function resetScore() {
  score.Win = 0;
  score.Lose = 0;
  score.Ties = 0;
  
  updateScore();
  saveScore();

  const result = document.querySelector(".js-result");
  result.innerText = "Start Playing";
  const moves = document.querySelector(".js-moves");
  moves.innerText = "";
}

