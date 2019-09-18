//code from group activity completed in class (with Dan and Dawid)
//Word pool for computer to choose
var names = [
    "car",
    "dog",
    "airplane",
    "motorcycle",
    "pool",
    "guitar",
    "octopus",
    "submarine",
    "computers",
    "countries",
    "animals",
    "flavors",
    "colors",
    "people",
]

//intialize variables
var wins = 0;
var losses = 0;
var chances = 8;
var wrongGuesses = [];
// var wrongGuesses    =   "";

// Mystery word. THis is the word the user needs to guess
var mysteryWord = names[Math.floor(Math.random() * names.length)];

var blanks = [];
for (let index = 0; index < mysteryWord.length; index++) {
    blanks.push("_");
    document.getElementById("word-blanks").innerHTML = blanks.join(" ");
        console.log(blanks);
    }

// post starting stats to screen
document.getElementById("wins").innerHTML = wins
document.getElementById("chances").innerHTML = chances
document.getElementById("wrongGuesses").innerHTML = wrongGuesses

var blanksRemaining = blanks.length;

// Game loop - referenced https://nostarch.com/download/JS4K_ch7.pdf for help
// while (blanksRemaining > 0){


for (let i = 0; i < mysteryWord.length; i++) {
    if (blanksRemaining===0 || chances === 0) {
        break;
    } else {
        document.onkeypress = function (event) {
            var userInput = event.key;
            console.log(event);

            var hasLetter = checkLetterInWord(userInput, mysteryWord);

            var letterPositions = getLetterPosition(userInput, mysteryWord);

            letterPositions.forEach(function name(index) {
                blanks[index] = userInput;
                blanksRemaining--
                console.log("blanks rem", blanksRemaining)
            });
            // if (blanksRemaining === 0) {
            
            // } 

            updateWordOnPage();

            var noMatch = updateWrongGuesses(userInput, mysteryWord);
            updateWins();
        }
    }
};

// define global functions
function checkLetterInWord(letter, word) {
    console.log(word.includes(letter));
}

function getLetterPosition(letter, word) {
    var letterIndex = [];
    for (let index = 0; index < word.length; index++) {
        if (word[index] === letter) {
            letterIndex.push(index);
        }
    }
    return letterIndex;
}

function updateWordOnPage() {
    document.getElementById("word-blanks").innerHTML = blanks.join(" ");
}

function updateWrongGuesses(letter, word) {
    if (word.includes(letter) === false) {
        wrongGuesses.push(letter);
        document.getElementById("wrongGuesses").innerHTML = wrongGuesses
        document.getElementById("chances").innerHTML = chances--
    }
}

function updateWins() {
    if (blanksRemaining <= 0) {
        document.getElementById("wins").innerHTML = wins++
    }
}

// function resetGame(){
    
//     document.getElementById("chances").innerHTML = chances 
// }

console.log(mysteryWord);


// initialize variable that tracks how many blank spaces are remaining. This allows us to make a while loop so the game loop continues until there all the letters are guesses (i.e. no more blanks remaining) or user runs out of chances 
// var blanksRemaining = mysteryWord.length;

// Game loop - referenced https://nostarch.com/download/JS4K_ch7.pdf for help
// while (blanksRemaining > 0) 
// for (let i=0; i<blanksRemaining; i++){}

// function updateFails() {
    // if (updateWordOnPage()) {
    //     console.log("good guess")
    // } else {
        // currently it is pushing the number of wrong guesses instead of the letters
        // need to update so it lists the actual userInput or letter guessed
        // document.getElementById("wrongGuesses").innerHTML = wrongGuesses.push("letter");
        // need to update so game resets once chances hits/below 0 - currently allows negative
        // also the chances should not decrement when user guesses a letter correctly
//         document.getElementById("chances").innerHTML = chances--
// }



// updateFails();
// updateWins();

// document.getElementById("word-blanks").innerHTML = mysteryWord;