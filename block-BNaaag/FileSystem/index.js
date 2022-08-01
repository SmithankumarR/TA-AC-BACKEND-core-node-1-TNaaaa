let fs = require('fs');

fs.readFile('./index.md','__async__sync.js',(err, file) => {
    if(err) throw err;
    console.log(file)
})
