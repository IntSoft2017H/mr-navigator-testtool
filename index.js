var http = require('http');
var fs = require('fs');

var path = [];

var routers = {};

routers['/upload-path'] = (req, res, body) => {
  var obj = JSON.parse(body);
  if (obj.path) {
    path = obj.path;
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    path: path,
    hoge: 'hoge',
  }));
};

routers['/path-editor'] = (req, res, body) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('path-editor.html'));
};

routers['/'] = (req, res, body) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    path: path,
    hoge: 'hoge',
  }));
};

http.createServer((req, res) => {
  var data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    var url = decodeURI(req.url);
    console.log(url);
    console.log(data);
    if (url in routers) {
      routers[url](req, res, data);
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 not found');
    }
  });
}).listen(10101, '127.0.0.1');
