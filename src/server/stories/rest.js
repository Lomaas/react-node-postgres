exports.get = function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Get on stories\n lalal');
};
