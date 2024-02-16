// function play() {
//     //Step-1: Hide the home Screen
//     // to hide a screen add the class 'hidden' to the home section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // Step-2: Show the playground
//     const playGroundScreen = document.getElementById('play-ground-screen');
//     playGroundScreen.classList.remove('hidden')
// }


function handleKeyboardKeyUpEvent(evn) {
    const playerPressed = evn.key;

    console.log("player pressed: ", playerPressed)

    // stop the game if pressed Escape
    if (playerPressed === 'Escape') {
        gameOver();
    }


    // // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet)

    //check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log("You got a point")
        console.log("you have pressed correctly", expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);

        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        //update score
        // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // 2. show the updated score
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log("you missed, you lost a life")
        const currentLife = getTextElementValueById('current-life');
        const updatedScore = currentLife - 1;
        setTextElementValueById('current-life', updatedScore)
        if (updatedScore === 0) {
            gameOver();
        }


        // ------------------------
        // step - 1: get the current life score
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);


        // step - 2: reduce the life element
        // const newLifeCount = currentLife - 1;

        // step - 3 : display the updated life count
        // currentLifeElement.innerText = newLifeCount;
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function play() {
    // hide everything show only playground
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground-screen')
    continueGame();


    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

}


function gameOver() {
    hideElementById('play-ground-screen');
    showElementById('final-score');


    // Update Final Score
    // 1.get the last score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
    setTextElementValueById('game-score', lastScore);

    // clear the last Selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet')
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet)
}

