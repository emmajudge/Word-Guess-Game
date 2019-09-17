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
    return word.includes(letter);  
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
        document.getElementById("wrongGuesses").innerHTML=wrongGuesses.push(event);
        document.getElementById("chances").innerHTML=chances--
    }
}

function updateWins(){
    if(blanks===mysteryWord){
        document.getElementById("wins").innerHTML=wins++
    }
}

console.log(mysteryWord);

// document.getElementById("word-blanks").innerHTML = mysteryWord;