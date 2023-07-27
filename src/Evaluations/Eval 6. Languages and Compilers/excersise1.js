/*
In JavaScript (an interpreted language), write a simple program that prompts the user for their name and then says "Hello" to them. 
Use the prompt-sync library for simplicity. You can install it with npm install prompt-sync.
 */

const readline = require('readline');

const greetUser = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}`);
    rl.close();
  });
};

module.exports = greetUser;
