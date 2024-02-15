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

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet)

    //check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log("You got a point")
        console.log("you have pressed correctly", expectedAlphabet);

        //update score
        // 1.get the current score
        // 2. show the updated score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log("you missed, you lost a life")
        /**
         * step-1: get the current life score
         * step-2: reduce the life element
         * step-3 : display the updated life coumt
         */
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLifeCount = currentLife - 1;
        currentLifeElement.innerText = newLifeCount;
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function play() {
    hideElementById('home-screen')
    showElementById('play-ground-screen')
    continueGame();
}

