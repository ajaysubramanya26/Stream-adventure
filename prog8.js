var request = require('request');
var postReq = request.post('http://localhost:8099');
/**
 * stdin -> send post request to localhost
 * pipe what localhost replied to stdout
 */
process.stdin
  .pipe(postReq)
  .pipe(process.stdout);
