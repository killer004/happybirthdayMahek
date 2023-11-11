// Get the current date
const today = new Date();

// Get the current year
const year = today.getFullYear();

// Get the birthday person's name from the user
const name = prompt("What is the birthday person's name?");

// Display the personalized message
const message = `Happy birthday, ${name}! Wishing you all the best in ${year}.`;
alert(message);