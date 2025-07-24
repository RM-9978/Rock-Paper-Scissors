//Code for score updation. Implementation needs to be added to runGame
let userScoreHTML = document.getElementById('user-score');
let computerScoreHTML = document.getElementById('comp-score');

let userScoreUpdation = 0;
let computerScoreUpdation = 0;
const defaultScore = 0;

const scoreUpdation = (winnerIs) => {
    console.log("scoreUpdation called with:", winnerIs);
    if (winnerIs == 'userWins') {
        userScoreUpdation += 1;
    }
    if (winnerIs == 'computerWins') {
        computerScoreUpdation += 1;
    }

    userScoreHTML.innerHTML = userScoreUpdation;
    computerScoreHTML.innerHTML = computerScoreUpdation;
}

//New Round button. 
const newRoundButton = document.getElementById('new-round-button');


const handlePressingNewRoundButton = () => {

    userWins.style.display = 'none';
    computerWins.style.display = 'none';
    tie.style.display = 'none';

    userRock.style.display = 'none';
    userPaper.style.display = 'none';
    userScissors.style.display = 'none';

    computerRock.style.display = 'none';
    computerPaper.style.display = 'none';
    computerScissors.style.display = 'none';

    document.getElementById('user-choice-form').style.display = 'block';

    const radioButtons = document.getElementsByName('user-picked');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
}

newRoundButton.addEventListener('click', handlePressingNewRoundButton);

//Start over button
const restartGameButton = document.getElementById('restart-game-button');

const handlePressingRestartGameButton = () => {
    handlePressingNewRoundButton();
    userScoreUpdation = 0;
    computerScoreUpdation = 0;
    userScoreHTML.innerHTML = defaultScore;
    computerScoreHTML.innerHTML = defaultScore;
}

restartGameButton.addEventListener('click', handlePressingRestartGameButton);