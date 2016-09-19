var express = require('express');
var fallback = require('express-history-api-fallback');
var favicon = require('serve-favicon');


var app = express();

app.set('port', (process.env.PORT || 5000));
var root = `${__dirname}`;

app.use(express.static(root));
app.use(fallback('index.html',  {root} ));
app.use(favicon(__dirname + '/static/favicon.ico'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});