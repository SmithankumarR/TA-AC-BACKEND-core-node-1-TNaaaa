console.log('Welcome to Nodejs');
const {readFile , readFileSync} = require('fs');

let os = require('os');

let cpus = console.log(os.cpus());
let freem = console.log(os.freemem());
let upTime = console.log(os.uptime());
let version = console.log(os.version());

console.log(cpus,freem,upTime,version);

readFile('./unlink.md', 'utf8', (err,content) => {
    if (err) throw err;
    console.log(content);
})
let synCode = readFileSync('./unlink.md', 'utf8');

setTimeout(() => console.log(synCode), 1000);

let url = require('url');

let parsedUrl = url.parse('https://airindia.com/fares/calculate?from=delhi&to=detroit');
console.log(parsedUrl);
console.log(parsedUrl.query,parsedUrl.pathname,parsedUrl.protocol);
