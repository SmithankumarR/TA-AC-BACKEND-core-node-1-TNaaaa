var area = require('./area');

console.log(area.circle(10)); 
console.log(area.rectangle(10,12));
console.log(area.square(5));

let buff = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff.write("created new Buffer");
console.log(buff.toString(), buff2);
const { readFile, readFileSync } = require('fs');

let sync = readFileSync('./app.js')
console.log(sync)
readFile('./app.js','utf8',(err,content) => {
    if (err) throw err;
    console.log(content)
})