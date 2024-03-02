// Letters 
const Letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let LettersArray = Array.from(Letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters 
LettersArray.forEach(letter => {

    // Create Span 
    let span = document.createElement("span");

    // Create Letter Text Node
    let theLetter = document.createTextNode(letter);

    // Append The Letter To Span
    span.appendChild(theLetter);

    // Add Class On Span
    span.className = "letter-box";

    // Append Span To The Letters Container 
    lettersContainer.appendChild(span)

});


// Object Of  Words + Categories

const words = {
    programming: ["php", "Javascript", "Go", "Scale", "fortran", " r", "python"],
    movies: ["prestige", "Inception", "parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Alpert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Gandhi"],
    countries: ["Sudan", "Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar", "KSA"]
}

// Get Random Property 
let allKeys = Object.keys(words);

// Random Number Depend On Keys Length 
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chose Words0020
let randomValueValue = randomPropValue[randomValueNumber];

// Set Categories Info 
document.querySelector(".game-info .category span ").innerHTML = randomPropName;

// Select Letters Guess Element 
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array 
let lettersAndSpace = Array.from(randomValueValue);

// Create Span Depended On Letters on Word
lettersAndSpace.forEach(letter => {

    // Create Empty Span 
    let emptySpan = document.createElement("span");

    if (letter === ' ') {

        // If Letter Is Space 
        emptySpan.className = 'with-space';

    }
    // Append Span To The Letter Guess Container
    lettersGuessContainer.appendChild(emptySpan);

});

// Select Guess Span 
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts 
let wrongAttempts = 0;

// Select The Draw Element 
let theDraw = document.querySelector(".hangman-draw");


// Handle Clicking On Letters

document.addEventListener("click", (e) => {

    // Set The Chose Status 
    let theStatus = false;


    if (e.target.className === 'letter-box') {

        e.target.classList.add("clicked");

        // Get Clicked Letters 
        let theClickLetter = e.target.innerHTML.toLowerCase();

        // The Chosen Word Letters
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        // The Chosen Word   console.log(lettersAndSpace);

        theChosenWord.forEach((wordLetter, wordIndex) => {

            // IF The Clicked Letter Equal To On Of The Chosen Word Letters
            if (theClickLetter == wordLetter) {

                // Set Status To Current 
                theStatus = true;

                // Loop On All Guess Spans 
                guessSpans.forEach((span, spanIndex) => {

                    if (wordIndex === spanIndex) {

                        span.innerHTML = theClickLetter;
                    }
                });

            }

        });

        // Out Side The Loop 

        // If Letter Is Wrong 
        if (theStatus !== true) {

            // Increase The Wrong Attempts
            wrongAttempts++;

            // Add Class Wrong On The Draw Element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            if (wrongAttempts === 8) {

                endGame();

                lettersContainer.classList.add("finished")

            } else {

                winGame();
            }

        }

    }

});

// End Game Function

function endGame() {

    // Create Popup Div 
    let div = document.createElement("div");

    // Create Text 
    let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue}`);

    // Append Text To Div
    div.appendChild(divText);

    // Add Class On div 
    div.className = 'popup';

    // Append To The Body 
    document.body.appendChild(div);
}


function winGameGame() {

    // Create Popup Div 
    let divOne = document.createElement("div");

    // Create Text 
    let divTextOne = document.createTextNode(`Grate , The Word Is True`);

    // Append Text To Div
    divOne.appendChild(divTextOne);

    // Add Class On div 
    divOne.className = 'popupOne';

    // Append To The Body 
    document.body.appendChild(divOne);
}