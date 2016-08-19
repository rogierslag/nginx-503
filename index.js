var express = require('express');

var port = process.env.PORT || 8080;

var app = express();

app.enable('trust proxy');
app.use('/*', function (req, res) {
	res.status(503).end('This service is temporarily unavailable');
	console.log(JSON.stringify({host: req.headers.host, datetime: (new Date()).toISOString(), client: req.ip}));
});
app.listen(port, function() {
	console.log('Nginx 503 generator started at port ' + port);
});

