var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.use('/:date', function(req, res) {
    var qs = req.params.date;
    var mthStr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dt = new Date(qs);

    res.json({unix: Date.parse(dt), natural: mthStr[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear()});
});

app.listen(port, function() {
    console.log('Server listening on port '+ port + '...');
});