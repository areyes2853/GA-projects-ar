// The correct answers to solve the mystery
const correct_location = "garden";
const correct_weapon = "poison";
const correct_suspect = "owner";

const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');
console.log(`${username}, welcome to 'Who Killed the Gardener Juan?'`);
console.log("You must solve the murder by choosing the correct location, weapon, and suspect.");

// First, ask if the player wants to play
let startGame = prompt("Would you like to play? yes/no: ").toLowerCase();

if (startGame === 'yes') {
    console.log(`Great! Let's solve the mystery.
We need to answer three simple questions:
1. Where was the murder committed?
2. What weapon was used?
3. Who is the murderer?
    `);

    // Ask for the weapon only after confirming the game will be played
    let weapon = prompt("What weapon was used? \nOptions: Poison, Knife, Gun: ").toLowerCase();
    // Check weapon answer and re-prompt if needed
    if (weapon !== correct_weapon) {
        console.log(`OMG why would someone use ${weapon}?! Try again.`);
        weapon = prompt("Options: Poison, Knife, Gun: ").toLowerCase();
    } else {
        console.log("You're warming up!");
    }

    // Ask for the location
    let location = prompt("Where was the murder committed?\nOptions: Kitchen, Garden, Library: ").toLowerCase();
    if (location !== correct_location) {
        console.log(`OMG why would someone commit the murder in ${location}?! Try again.`);
        location = prompt("Options: Kitchen, Garden, Library: ").toLowerCase();
    } else {
        console.log("It's getting HOT IN HERE!");
    }

    // Ask for the suspect
    let suspect = prompt("Who is the murderer?\nOptions: Madam, Son, Owner: ").toLowerCase();
    if (suspect !== correct_suspect) {
        console.log(`No way! ${suspect} is not the killer! Try again.`);
        suspect = prompt("Options: Madam, Son, Owner: ").toLowerCase();
    } else {
        console.log("How... I mean, you're the man!");
    }

    // Final check: if all answers are correct, reveal the mystery
    if (weapon === correct_weapon && location === correct_location && suspect === correct_suspect) {
        console.log("🎉 Congratulations! You solved the mystery! 🎉");
        console.log(`The ${correct_suspect} killed Juan in the ${correct_location} with ${correct_weapon}.`);
        console.log("Reason: The Owner had a hidden feud with Juan, fearing he would reveal a secret about a hidden fortune.");
    } else {
        console.log("You have failed to solve the mystery! Juan's ghost will haunt you forever! 👻");
    }
    
} else if (startGame === 'no') {
    console.log("Wow... so you're just going to walk away from a murder mystery?");
    console.log("Juan's ghost is judging you right now. 👻");
    console.log("Fine... go back to whatever *important* things you were doing. But remember, justice was denied today.");
} else {
    console.log("Invalid input. Please restart the game and type 'yes' or 'no'.");
}