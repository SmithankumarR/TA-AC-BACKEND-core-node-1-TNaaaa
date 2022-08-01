var url = require('url');
const parsedUrl = url.parse(
  'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male',
  true
);
console.log(parsedUrl.pathname, parsedUrl.query);
console.log(parsedUrl.host, parsedUrl.protocol);

const praseMe = url.parse('https://www.behance.net/search/images', true);

console.log(praseMe.pathname, praseMe.query);
console.log(praseMe.host, praseMe.protocol);
