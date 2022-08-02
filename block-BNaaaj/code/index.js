let os = require('os');

console.log('Welcome to Nodejs');

// const { readFile, unlink } = require('fs');


let cpus = console.log(os.cpus().length);
let freem = console.log(os.freemem());
let upTime = console.log(os.uptime());

console.log(cpus, freem, upTime);



