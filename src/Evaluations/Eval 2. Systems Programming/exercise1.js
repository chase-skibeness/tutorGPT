// Please write a simple script in Node.js that takes a directory path as a command-line argument and prints the list of files in that directory. You can use the built-in fs module for this.

var fs = require('fs');

function readDir(dirName) {
    try {
        const files = fs.readdirSync(dirName);
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        console.error(err);
    }
}

console.log("enter path you'd like to read:");
process.stdin.on('data', (data) =>  readDir(data.toString().trim()));