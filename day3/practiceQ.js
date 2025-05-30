/* Prompt the user to enter their full name. Generate a username for them based on the input.
start username with @, followed by their full name and ending with the fullname length.*/

const userInput = prompt("Enter Your Name. Please avoid a space between your first name and last name : ");
const userName = userInput.length;

console.log(`This is your username : @${userInput}${userName}`);

