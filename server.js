'use strict';

/**
 * setup and configure our server
 */
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

/**
 * set up routes
 */
app.get('/:date', function(req, res) {
    var qs = req.params.date;
    var mthStr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dt = new Date(qs);

    res.json({unix: Date.parse(dt), natural: mthStr[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear()});
});

app.get('*', function(req, res) {
    res.status(400).json({unix: null, natural: null});
});

/**
 * start server
 */
app.listen(port, function() {
    console.log('Server listening on port '+ port + '...');
});