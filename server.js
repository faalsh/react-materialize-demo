var express = require('express');
var fallback = require('express-history-api-fallback');
var favicon = require('serve-favicon');
var sync = require('./sync');
var connector = require('./connector')




var app = express();

app.set('port', (process.env.PORT || 5000));
var root = `${__dirname}`;

app.get('/syncInit', function(req,res){
	try {
		sync.startSync(true);	
	} catch(e) {
		console.log(e);
	}
	res.send('sync completed');
})

app.get('/sync', function(req,res){
	try {
		sync.startSync(false);	
	} catch(e) {
		console.log(e);
	}
	res.send('sync completed');
})

app.get('/ping', function(req,res){
	try {
			connector.fetchLeagues().then(function(matches){
				res.send(matches)
			})
	} catch(e) {
		console.log(e);
	}
	
})

app.use(express.static(root));
app.use(fallback('index.html',  {root} ));
app.use(favicon(__dirname + '/static/favicon.ico'));




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});