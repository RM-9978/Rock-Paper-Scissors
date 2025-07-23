//Getting user choice
//Getting the radio buttons + value

//get this function checked later
const checkRadioButton = () => {
    const radioButtons = document.getElementsByName('user-picked');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            return radioButton.value;
        }
    };
    throw new Error('No Radio Buttons Checked');
}


//updating the image

const userRock = document.getElementById('user-rock');
const userPaper = document.getElementById('user-paper');
const userScissors = document.getElementById('user-scissors');

const getUserImage = (userChose) => {
    if (userChose === 'rock'){
        userRock.style.display = 'block';
    } 
    if (userChose === 'paper') {
        userPaper.style.display = 'block';
    }
    if (userChose === 'scissors') {
        userScissors.style.display = 'block';
    }
}



//getting computer choice
//Function that generates random number (0, 1, 2)

const getRandom = () => {
    const randomNum = Math.floor(Math.random()*3);
    return randomNum;
}


//function that determines the computer choice
    const getComputerChoice = (randomNum) => {
        if(randomNum == 0) {
            return 'rock';
        } else if (randomNum == 1) {
            return 'paper';
        } else if (randomNum == 2) {
             return 'scissors';
        }
    }


//the test
//console.log(`random is ${random}| computer choice is ${computerChoice}`);

// getting and assigning all of the computer's options


const computerRock = document.getElementById('comp-rock');
const computerPaper = document.getElementById('comp-paper');
const computerScissors = document.getElementById('comp-scissors');

//Making the correct image apparent
const getComputerChoiceImage = (computerChoice) => {
    if (computerChoice == 'rock') {
        computerRock.style.display = 'block';
    } else if (computerChoice == 'paper') {
        computerPaper.style.display = 'block';
    } else if (computerChoice == 'scissors') {
        computerScissors.style.display = 'block';
    }
}


//Determining winner

const determineWinner = (userValue, computerValue) => {
    if (userValue === computerValue) {
        return 'tie';
    } else if (userValue === 'rock' && computerValue === 'scissors') {
        return 'userWins';
    } else if (userValue === 'paper' && computerValue === 'scissors') {
        return 'computerWins';
    } else if (userValue === 'scissors' && computerValue === 'rock') {
        return 'ComputerWins';
    } else if (userValue == 'rock' && computerValue == 'paper') {
        return 'computerWins';
    } else if (userValue === 'paper' && computerValue === 'rock') {
        return 'userWins';
    } else if (userValue === 'scissors' && computerValue === 'rock') {
        return 'computerWins';
    }
}


//Displaying the correct image

const userWins = document.getElementById('user-won');
const computerWins = document.getElementById('computer-won');
const tie = document.getElementById('tie');

const displayingImage = (winnerIs) => {
    if (winnerIs == 'userWins'){
        userWins.style.display = 'block';
    }

    if (winnerIs == 'computerWins'){
        computerWins.style.display = 'block';
    }

    if (winnerIs == 'tie'){
        tie.style.display = 'block';
    }

    setTimeout(function() {
        userWins.style.display = 'none';
        computerWins.style.display = 'none';
        tie.style.display = 'none';
  }, 7000);
}



//run game
const runGame = () => {

    try {
        document.getElementById('user-choice-form').style.display = 'none';
        const userValue = checkRadioButton();
        let random = getRandom();
        let computerValue = getComputerChoice(random);

        getUserImage(userValue);

        setTimeout(function() {
            getComputerChoiceImage(computerValue);
    }, 2000);

        setTimeout(function() {
            const winnerIs = determineWinner(userValue, computerValue);
            displayingImage(winnerIs);
    }, 4000);
        } catch (error) {
            console.log(error.message)
        }


}

//from AI 
window.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.getElementsByName('user-picked');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', runGame);
    });
});