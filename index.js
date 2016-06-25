'use strict';
require('babel-register'); // add es6 syntax (let, =>, etc)
require('babel-polyfill'); // add es6 globals (Promise, Map, etc.)

var express = require('express'),
    app = express(),
    port = process.env.PORT || 8022;

app.listen(port, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('[%s] Listening on http://localhost:%d', app.settings.env.toUpperCase(), port);
    }
});
