import express from 'express';
import fallback from 'express-history-api-fallback';
import favicon from 'serve-favicon';
import {apolloExpress, graphiqlExpress} from 'apollo-server';
import {makeExecutableSchema} from 'graphql-tools';
import bodyParser from 'body-parser';
import {fetchLeagues} from './data/connectors'


import Schema from './data/schema';
import Resolvers from './data/resolvers';
// import Connectors from './data/connectors';

var app = express();

app.set('port', (process.env.PORT || 5000));
var root = `${__dirname}`;



const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  // connectors: Connectors,
});


app.use('/graphql', bodyParser.json(), apolloExpress({
	schema: executableSchema,
  	context: {}
}));

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql'
}));


app.use(express.static(root));
app.use(fallback('index.html',  {root} ));
app.use(favicon(__dirname + '/static/favicon.ico'));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});