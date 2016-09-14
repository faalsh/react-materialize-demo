var express = require('express');
var fallback = require('express-history-api-fallback');


var app = express();

app.set('port', (process.env.PORT || 80));
var root = `${__dirname}/src`;

app.use(express.static(root));
app.use(fallback('index.html',  {root} ))


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});