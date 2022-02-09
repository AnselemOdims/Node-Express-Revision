const { readFileSync, writeFileSync } = require('fs');

const fileA = readFileSync('/home/anselemcodes/Documents/Node-Express-Revision/FS/content/first.txt', 'utf8');
const fileB = readFileSync('/home/anselemcodes/Documents/Node-Express-Revision/FS/content/second.txt', 'utf8');

console.log(fileA, fileB)

writeFileSync('/home/anselemcodes/Documents/Node-Express-Revision/FS/content/new_file.txt', `Here is the result: ${fileA} and ${fileB} `)