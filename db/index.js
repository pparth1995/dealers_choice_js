const pg = require('pg');
const postgresUrl = 'postgres://localhost/athlete';
const client = new pg.Client(postgresUrl);

// connecting to the `postgres` server
client.connect();

// make the client available as a Node module
module.exports = client;