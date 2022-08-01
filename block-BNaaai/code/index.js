var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);

const praseMe = url.parse("https://www.behance.net/search/images",true);

console.log(praseMe);
console.log(praseMe.pathname);
console.log(praseMe.query);
console.log(praseMe.host );
