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
var wins            =   0;
var losses          =   0;
var chances         =   9;
var wrongGuesses    =   [];
// var wrongGuesses    =   "";

// Mystery word. THis is the word the user needs to guess
// for (let index = 0; index < names.length; index++) {
    var mysteryWord = names[Math.floor(Math.random() * names.length)];

    var blanks  =   [];
    for (let index = 0; index < mysteryWord.length; index++) {
        blanks.push("_");
        document.getElementById("word-blanks").innerHTML   =   blanks.join(" ");
        
        console.log(blanks);
        
    }

document.onkeypress = function (event) {
    var userInput   =   event.key;
    console.log(event);

    var hasLetter = checkLetterInWord(userInput, mysteryWord);
    // var noMatch= !hasLetter;

    var letterPositions = getLetterPosition(userInput, mysteryWord);

    var sample = getLetterPosition('p', 'apple');
    console.log('sample', sample)

    letterPositions.forEach(function name(index) {
        blanks[index] = userInput;
    })

    console.log('blanks', blanks);
    updateWordOnPage();
    updateFails();
    updateWins();
}
function checkLetterInWord(letter, word) {
    console.log (word.includes(letter));  
} 

function getLetterPosition(letter, word) {
    var letterIndex = [];
    for (let index = 0; index < word.length; index++) {
        if(word[index] === letter){
            letterIndex.push(index);
        }
    }
   return letterIndex; 
}

function updateWordOnPage() {
    document.getElementById("word-blanks").innerHTML = blanks.join(" ");
}

function updateFails(){
    if(updateWordOnPage()){
        console.log("good guess")
    }else{
        // currently it is pushing the number of wrong guesses instead of the letters
        // need to update so it lists the actual userInput or letter guessed
        document.getElementById("wrongGuesses").innerHTML=wrongGuesses.push(event.key);
        // need to update so game resets once chances hits/below 0 - currently allows negative
        // also the chances should not decrement when user guesses a letter correctly
        document.getElementById("chances").innerHTML=chances--
    }
}

// not working yet, need to update such that win count increases by 1 when all blanks
// have been guessed correctly, then reset the game (new word and reset guesses remaining)
function updateWins(){
    if(blanks===mysteryWord){
        document.getElementById("wins").innerHTML=wins++
    }
}

console.log(mysteryWord);

// document.getElementById("word-blanks").innerHTML = mysteryWord;