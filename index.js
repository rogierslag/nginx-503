var express = require('express');

var port = process.env.PORT || 8080;

var app = express();
app.use('/*', function (req, res) {
	res.statusCode = 503;
	res.write('No NGINX. I dont work, but I dont want an empty upstream block either');
	res.end();
	
});
app.listen(port, function() {
	console.log('Nginx 503 generator started at port ' + port);
});

