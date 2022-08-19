// DOM Variables

const rock = document.querySelectorAll('.rock');
const paper = document.querySelectorAll('.paper');
const scissors = document.querySelectorAll('.scissors');
const computerButtons = document.querySelectorAll('.button_computer');
const playerButtons = document.querySelectorAll('.button_player');
const playerScores = document.querySelectorAll('.score_player');
const computerScores = document.querySelectorAll('.score_computer');
const message = document.querySelectorAll('.message');
const exits = document.querySelectorAll('.scoreboard_exit');
const endgame = document.querySelector('.gameboard_end');
const playerLose = document.querySelector('.gameboard_end_lose');
const playerWin = document.querySelector('.gameboard_end_win');
const gameStart = document.querySelector('.game_start');
const introContainer = document.querySelector('.game_container_intro');
const gameboard = document.querySelector('.gameboard');
const humanWinMessage_1 = document.querySelector('.player_win_message_1');
const humanWinMessage_2 = document.querySelector('.player_win_message_2');
const compWinMessage_1 = document.querySelector('.pc_win_message_1');
const compWinMessage_2 = document.querySelector('.pc_win_message_2');
const computerHearts = document.querySelectorAll('.computer-heart');
const playerHearts = document.querySelectorAll('.player-heart');

// Variables

let youWin = 0;
let pcWin = 0;
let roundEnd = '';
let yourSelection = '';
let iteration = 0;
let iteration2 = 0;
let iteration3 = 0;
let iteration4 = 0;
let iteration5 = 0;
let iteration6 = 0;
let iteration7 = 0;
let introMessage_1 = '> Computers are taking over...';
let introMessage_2 = '> you are our last hope';
let introMessage_3 =
  '> win 5 times to save humanity from their algorithmic evils';
let playerWinMessage_1 = '> You have won!';
let playerWinMessage_2 = '> Computer apocalypse has been prevented!';
let pcWinMessage_1 = '> computers won! :(';
let pcWinMessage_2 = '> there is still time, to prevent the apocalypse!';

gameStart.addEventListener('click', function () {
  introContainer.classList.add('hide');
  gameboard.classList.add('show');
});

function winAnimation() {
  if (youWin == 5) {
    if (humanWinMessage_1.innerHTML.length - 3 < playerWinMessage_1.length) {
      if (iteration4 < playerWinMessage_1.length) {
        humanWinMessage_1.innerHTML += playerWinMessage_1.charAt(iteration4);
        iteration4++;
        setTimeout(winAnimation, 50);
      }
    } else if (
      humanWinMessage_1.innerHTML.length - 3 == playerWinMessage_1.length &&
      humanWinMessage_2.innerHTML.length - 3 < playerWinMessage_2.length
    ) {
      if (iteration5 < playerWinMessage_2.length) {
        humanWinMessage_2.innerHTML += playerWinMessage_2.charAt(iteration5);
        iteration5++;
        setTimeout(winAnimation, 50);
      }
    } else {
      exits[1].classList.add('scoreboard_exit_on');
    }
  } else if (pcWin == 5) {
    if (compWinMessage_1.innerHTML.length - 3 < pcWinMessage_1.length) {
      if (iteration6 < pcWinMessage_1.length) {
        compWinMessage_1.innerHTML += pcWinMessage_1.charAt(iteration6);
        iteration6++;
        setTimeout(winAnimation, 50);
      }
    } else if (
      compWinMessage_1.innerHTML.length - 3 == pcWinMessage_1.length &&
      compWinMessage_2.innerHTML.length - 3 < pcWinMessage_2.length
    ) {
      if (iteration7 < pcWinMessage_2.length) {
        compWinMessage_2.innerHTML += pcWinMessage_2.charAt(iteration7);
        iteration7++;
        setTimeout(winAnimation, 50);
      }
    } else {
      exits[0].classList.add('scoreboard_exit_on');
    }
  }
}

//Intro TypeWriter effect.

function intro() {
  if (
    document.querySelector('.intro_message_1').innerHTML.length - 3 <
    introMessage_1.length
  ) {
    if (iteration < introMessage_1.length) {
      document.querySelector('.intro_message_1').innerHTML +=
        introMessage_1.charAt(iteration);
      iteration++;
      setTimeout(intro, 50);
    }
  } else if (
    document.querySelector('.intro_message_2').innerHTML.length - 3 <
    introMessage_2.length
  ) {
    if (iteration2 < introMessage_2.length) {
      document.querySelector('.intro_message_2').innerHTML +=
        introMessage_2.charAt(iteration2);
      iteration2++;
      setTimeout(intro, 50);
    }
  } else if (
    document.querySelector('.intro_message_3').innerHTML.length - 3 <
    introMessage_3.length
  ) {
    if (iteration3 < introMessage_3.length) {
      document.querySelector('.intro_message_3').innerHTML +=
        introMessage_3.charAt(iteration3);
      iteration3++;
      setTimeout(intro, 50);
    }
  } else if (
    document.querySelector('.intro_message_3').innerHTML.length - 3 ==
    introMessage_3.length
  ) {
    gameStart.classList.add('start-button-on');
  }
}

intro();

// Healthbar Control/Animation

function computerHealthbar() {
  if (youWin == 1) {
    computerHearts[4].classList.add('healthbar-remove');
  } else if (youWin == 2) {
    computerHearts[3].classList.add('healthbar-remove');
  } else if (youWin == 3) {
    computerHearts[2].classList.add('healthbar-remove');
  } else if (youWin == 4) {
    computerHearts[1].classList.add('healthbar-remove');
  } else if (youWin == 5) {
    computerHearts[0].classList.add('healthbar-remove');
  }
}
function playerHealthBar() {
  if (pcWin == 1) {
    playerHearts[4].classList.add('healthbar-remove');
  } else if (pcWin == 2) {
    playerHearts[3].classList.add('healthbar-remove');
  } else if (pcWin == 3) {
    playerHearts[2].classList.add('healthbar-remove');
  } else if (pcWin == 4) {
    playerHearts[1].classList.add('healthbar-remove');
  } else if (pcWin == 5) {
    playerHearts[0].classList.add('healthbar-remove');
  }
}

function resetHearts() {
  for (let i = 0; i < 5; i++) {
    playerHearts[i].classList.remove('healthbar-remove');
    computerHearts[i].classList.remove('healthbar-remove');
  }

  // Player choice
}
function rockFunction() {
  yourSelection = 'rock';
}
function paperFunction() {
  yourSelection = 'paper';
}
function scissorsFunction() {
  yourSelection = 'scissors';
}

// Computer random choice function

function computerPlay() {
  let possibleSelection = ['rock', 'paper', 'scissors'];
  randomSelection =
    possibleSelection[Math.floor(Math.random() * possibleSelection.length)];
  return randomSelection;
}
// Event listeners

rock[1].addEventListener('click', function () {
  rockFunction();
  playRound();
  rock[1].disabled = true;
  setTimeout(() => {
    rock[1].disabled = false;
  }, 1200);
});

paper[1].addEventListener('click', function () {
  paperFunction();
  playRound();
  paper[1].disabled = true;
  setTimeout(() => {
    paper[1].disabled = false;
  }, 1200);
});
scissors[1].addEventListener('click', function () {
  scissorsFunction();
  playRound();
  scissors[1].disabled = true;
  setTimeout(() => {
    scissors[1].disabled = false;
  }, 1200);
});

// Round animation

async function roundAnimation(n, x) {
  computerButtons[n].classList.add('computer_animation');
  playerButtons[x].classList.add('player_animation');
  setTimeout(function () {
    computerButtons.forEach((computerButton) => {
      computerButton.classList.remove('computer_animation');
    });
    playerButtons.forEach((playerButton) => {
      playerButton.classList.remove('player_animation');
    });
  }, 1000);
}

// Round Result Function

function playRound() {
  const computerSelection = computerPlay();
  const playerSelection = yourSelection;
  // Player winning conditions
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    roundAnimation(2, 0);
    roundEnd = 'You win! Rock beats Scissors!';
    youWin++;
    computerHealthbar();
  }
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    roundAnimation(0, 1);
    roundEnd = 'You win! Paper beats Rock!';
    youWin++;
    computerHealthbar();
  }
  if (playerSelection == 'scissors' && computerSelection == 'paper') {
    roundAnimation(1, 2);
    roundEnd = 'You win! Scissors beats Paper!';
    youWin++;
    computerHealthbar();
  }
  // Computer winning conditions
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    roundAnimation(1, 0);
    roundEnd = 'You lose. Paper beats Rock!';
    pcWin++;
    playerHealthBar();
  }
  if (playerSelection == 'paper' && computerSelection == 'scissors') {
    roundAnimation(2, 1);
    roundEnd = 'You lose. Scissors beats Paper!';
    pcWin++;
    playerHealthBar();
  }
  if (playerSelection == 'scissors' && computerSelection == 'rock') {
    roundAnimation(0, 2);
    roundEnd = 'You lose. Rock beats Scissors!';
    pcWin++;
    playerHealthBar();
  }
  // Tie condition
  if (playerSelection == computerSelection) {
    if (playerSelection == 'rock') {
      roundAnimation(0, 0);
    } else if (playerSelection == 'paper') {
      roundAnimation(1, 1);
    } else {
      roundAnimation(2, 2);
    }
    roundEnd = "It's a tie. Better luck next round!";
    setTimeout(function () {
      computerButtons.forEach((computerButton) => {
        computerButton.classList.remove('computer_animation');
      });
      playerButtons.forEach((playerButton) => {
        playerButton.classList.remove('player_animation');
      });
    }, 1000);
  }
  if (youWin == 5) {
    gameboard.classList.add('hide');
    endgame.classList.add('show');
    playerWin.classList.add('show');
    winAnimation();
  } else if (pcWin == 5) {
    gameboard.classList.add('hide');
    endgame.classList.add('show');
    playerLose.classList.add('show');
    winAnimation();
  }
  // Round end score tracking

  for (const playerScore of playerScores) {
    playerScore.textContent = youWin;
  }
  for (const computerScore of computerScores) {
    computerScore.textContent = pcWin;
  }
}

//Round reset

for (const exit of exits) {
  exit.addEventListener('click', function () {
    resetHearts();
    endgame.classList.remove('show');
    playerLose.classList.remove('show');
    playerWin.classList.remove('show');
    youWin = 0;
    pcWin = 0;
    iteration = 0;
    iteration2 = 0;
    iteration3 = 0;
    iteration4 = 0;
    iteration5 = 0;
    iteration6 = 0;
    iteration7 = 0;
    humanWinMessage_1.innerHTML = '';
    humanWinMessage_2.innerHTML = '';
    compWinMessage_1.innerHTML = '';
    compWinMessage_2.innerHTML = '';
    for (const playerScore of playerScores) {
      playerScore.textContent = youWin;
    }
    for (const computerScore of computerScores) {
      computerScore.textContent = pcWin;
    }
    gameboard.classList.remove('hide');
  });
}
