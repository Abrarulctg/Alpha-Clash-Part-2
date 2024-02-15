// function play() {
//     //Step-1: Hide the home Screen
//     // to hide a screen add the class 'hidden' to the home section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // Step-2: Show the playground
//     const playGroundScreen = document.getElementById('play-ground-screen');
//     playGroundScreen.classList.remove('hidden')
// }


function play() {
    hideElementById('home-screen')
    showElementById('play-ground-screen')
    continueGame();
}

function continueGame() {
    // Step=1 : Generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet)

    // set Randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    // set Background Color
    setBackgroundColorById(alphabet)
}

