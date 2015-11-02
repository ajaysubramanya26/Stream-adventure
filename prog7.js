var through = require('through2');
var http = require('http');

/**
 * [through description]
 * @param  {[function]} write [the stream is got here and uppercased]
 * @param  {[function]} end   [notifies that you are done]
 * @return {[Stream]}       [returns a stream which you can pipe]
 */
var stream = through(write,end);

function write(buffer,encoding,next){
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done){done();}

var server = http.createServer(function(req,res){
  if(req.method === "POST"){
    req.pipe(stream).pipe(res);
  }
});
server.listen(process.argv[2]);
