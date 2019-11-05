// 1 create an alert that says "hello world"
alert("1. Hello World!");

// 2 create a prompt which asks for your favorite number
let sign = prompt("What's your favorite number?");

console.log("2: " + sign)



let mainDiv = document.querySelector('div');
// mainDiv.innerHTML = `

//         <input type="number" id="number" name="number" required>
//         <input type="submit" id="submit" onclick="submitPress()">
//         <br>

// `;


// 2a display the response in the console with "user's favorite nunber is: (display input)"

let submit = document.querySelector('#submit');

function submitPress() {
    let numberInput = document.querySelector('#number');
    console.log("2a: " + numberInput.value);
    // event.preventDefault();
}



// 3 create a variable which selects the h1
const heading = document.querySelector("h1");
// 3a add inner text to the header selector
heading.innerHTML = "Header";
// 3b add a border around the h1 that is 1px, solid, and black. use "cssText" to add this
heading.style.cssText = "border: 1px solid black";

// 4 console.log a variable tht holds an array of the alphabet
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// 4a use "slice" to remove the vowels, including "y"
//vowels = alphabet.slice(0, 4, 8, 14, 20, 24);
vowels = alphabet.slice(1, 4);
vowels += alphabet.slice(5, 8);
vowels += alphabet.slice(9, 14);
vowels += alphabet.slice(15, 20);
vowels += alphabet.slice(21, 24);
vowels += alphabet.slice(25, 26);


// 4b console.log the remaining array of consonants, label the console log with a string
console.log("Alphabet - Vowels: " + vowels)
// 4c console.log the length of this array, label it with a string
console.log(vowels.length)

// 5 create a variable of an array of numbers 1-5
numberArray = [1, 2, 3, 4, 5]
// 5a create a "const" which uses "map" to multiply each number with itself
const numberMap = numberArray.map(numberItem => {
    return numberItem *= numberItem
})
// 5b console.log the results of the mapped array, label the console log with string
console.log("5b: " + numberMap);
// 5c use the "forEach" method on the mapped array to console log the remainder when divided by 2
numberMap.forEach(function (item) {
    console.log("5c: " + item / 2)
});

// 6 create an variable holding an object of each person with the properties "name, age, jobTitle, laptopType, isStudent" the data can/is fictional
const peopleArray = [
    {
        name: "todd",
        age: 54,
        jobTitle: "professional dodgeball player",
        laptopType: "ugly computer",
        isStudent: true,
    },
    {
        name: "mary",
        age: 22,
        jobTitle: "limo driver",
        laptopType: "chromebook",
        isStudent: false,
    },
    {
        name: "samantha",
        age: 33,
        jobTitle: "soccer player",
        laptopType: "macbook",
        isStudent: false,
    }
]
// 6a create a for loop to dynamically create a sentence describing each "person"

for (var counter = 0; counter < peopleArray.length; counter++) {
    currentPerson = peopleArray[counter];

    studentText = '';
    if (currentPerson.isStudent) {
        studentText = "is "
    } else {
        studentText = "is not "
    }

    // 6b inject these sentences in "p" elements in the html div

    mainDiv.innerHTML += `
    <p>
        ${currentPerson.name} is ${currentPerson.age} years old and ${studentText}a student. 
        ${currentPerson.name} is a ${currentPerson.jobTitle} and uses a ${currentPerson.laptopType}. </p>
        `
};


// 7 create two "const" variables of strings. console log the combined result using "concat"
const hello = ["hello ", "what's", "up?"];
const world = ["I", "am", "good."];
console.log(hello.concat(world));


// 8 create an array of strings made up of words of a quote or nursery rhyme.
const rowboat = ["row", "row", "row", "your", "boat", "gently", "down", "the", "stream"];
// 8a use the "filter" method on the array variable to gather the words with length greater than 3
const result = rowboat.filter(word => word.length > 3);


// 8b console log those words
console.log("8b: " + result);
// 8c use "join" to create a sentence outputted in a console log
console.log("8c: " + rowboat.join(' '));
let i = 0;
// 9 create an array of 10 javascript concepts
jsConcepts = ["loops", "variables", "functions", "arrays", "objects", "strings", "API's", "file paths", "DOM", "debugging"]
// 9a using a "do ... while" loop, console.log each concept with a labeling string
do {

    console.log("9a: " + jsConcepts[i]);
    i = i + 1;
} while (i < jsConcepts.length);
// example output for one loop: "we have learned about ____ in javascript" (i.e. variables)

// 10 create a function that injects a clickable div on the document
mainDiv.innerHTML += `<div id="container"><div id="clickable" onclick="innerMessage()"></div></div>`
let clickable = document.querySelector('#clickable');
let container = document.querySelector('#container');
clickable.style.cssText = "padding: 20px; background-color: blue; width: 80px";
container.style.cssText = "display: flex;"
//mainDiv.style.cssText = "display: flex;";
// 10a when clicking on the button, a message appears next to the div

function innerMessage() {
    container.innerHTML += `<p>Hello!</p>`;
}