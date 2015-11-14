var pg = require('pg');
var conString = "postgres://postgres:1234@localhost/postgres";

pg.connect(conString, function(err, client, done) {
  if (handleError(err)) { return; }

  client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    done();
    if (handleError(err)) { return; }

    console.log(result.rows[0].number);
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('You are visitor number ' + result.rows[0].count);
  });
});

handleError(err, done) {
  if(!err) return false;

  if (client) {
    done(client);
  }
  res.writeHead(500, {'content-type': 'text/plain'});
  res.end('An error occurred');
  return true;
}
