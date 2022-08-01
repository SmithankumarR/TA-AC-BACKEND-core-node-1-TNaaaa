const { readFile,readFileSync } = require('fs');

// asynchronous file
readFile('./content.md','utf8',(err, file) => {
    if(err) throw err;
    console.log(file);
})
// synchronous
var sync = readFileSync('./content.md','utf8');

console.log(sync);
// synchronous
let buff = Buffer.alloc(20);
buff.write("Learning Node Js")
console.log(buff.toString());