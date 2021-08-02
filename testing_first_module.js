const http = require('http');
const date = require('./my_first_module');

http.createServer(function (request, response) {
	response.writeHead(200, {'content-type' : 'text/html'});
	response.end(date.myDateTime());
}).listen(8080);

