var http = require ('http');
http.createServer(function(req, res){
  console.log(req.url);
  console.log(req.method);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello World\n");
}).listen(3000, function() {
  console.log('server is running in 3000');
});