//Function that generates random number (0, 1, 2)

const getRandom = () => {
    const randomNum = Math.floor(Math.random()*3);
    return randomNum;
}

let random = getRandom();

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

let computerChoice = getComputerChoice(random);

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

