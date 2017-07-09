const http = require('http');
const $ = require('jquery');

var help = function() {
  return 'helped';
}

var check = function() {
  return 'checked!!';
}

http.createServer((req, res) => {
  console.log(req.url);
  var message = req.url;
  var response;
  if (message.match(/help/)) {
    response = help();
  } else if (message.match(/check/)) {
    response = check();
  }
  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.end(response);
}).listen(1337);

console.log('Server running at http://localhost:1337/');
