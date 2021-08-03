const http = require('http');
const url = require('url');

http.createServer( function (request, response) {
    let incomingUrl = request.url;
    let incomingRequestParams = url.parse(incomingUrl, true).query;
    response.writeHead(200, {'content-type' : 'text/html'});
    response.end(incomingRequestParams.name);
}).listen(8080);