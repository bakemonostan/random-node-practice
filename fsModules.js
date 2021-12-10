// const fs = require('fs');

//Using destructuring

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/test.txt', 'utf8');
const second = readFileSync('./content/subfolder/test2.txt', 'utf8');

console.log(first, second);
