var split = require('split');
var through = require('through2');
var i=0;
var stream = through(write,end);

function write(chunk,encoding,next){
  var line = chunk.toString();
  this.push(i%2 === 0
    ? line.toLowerCase()+"\n"
    : line.toUpperCase()+"\n");
  i++;
  next();
}
function end(done){done();}

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);
