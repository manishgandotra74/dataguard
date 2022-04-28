const path = require('path');
const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const app = express()

server.use(middlewares);
server.use(router);

var _server = app.server(3001, function () {
  var host = _server.address().address;
  var port = _server.address().port;
  console.log('running ' + host + ':' + port)
});
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './build')));


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode",process.env.PORT || 3000);
});