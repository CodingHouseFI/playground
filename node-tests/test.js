var fs = require("fs"),
    http = require("http"),
    url = require('url');

function sleep(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

http.createServer(responseHandler()).listen(8888);

function responseHandler(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url.match("fav")) {
    response.end("");
    return;
  }

  var queryData = url.parse(request.url, true).query;
  queryData.date = Date.now();

  sleep(queryData.sleep || 0, function() {
    response.write(JSON.stringify(queryData));
    response.end();
  });
}
