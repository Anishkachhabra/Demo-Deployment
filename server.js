var express = require('express');
var app = express();

var port = 8080; // 8080 is default port for unsecure HTTP traffic

app.use(express.static('public')); // Serve static files from the 'public' directory in node.js
// This will allow us to serve HTML, CSS, and JavaScript files which are static assets

app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});
