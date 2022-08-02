let url = require('url');

let parsedUrl = url.parse('https://airindia.com/fares/calculate?from=delhi&to=detroit',true);
console.log(parsedUrl);
console.log(parsedUrl.query, parsedUrl.pathname, parsedUrl.protocol);
