var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(text){
    console.log(text.toString().split("").reverse().join(""));
  }));
