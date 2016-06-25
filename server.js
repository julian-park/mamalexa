// Node packages
var express = require('express');
var app = express();
// var db = require('mysql');
var bodyParser = require('body-parser');
var multer = require('multer');

// Configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer({dest:'./uploads/'}).single('singleInputFileName'));
app.use(express.static('.'));

function main() {
    app.post("/", function(req, res) {
        // HTTP requests are received through req
        // HTTP responses are sent back through res
        var request = req.body;

        if (request["action"] == "yourAction") {
            // do something
        }
    });

    app.listen(3000, function() {
        console.log("Listening on port 3000.")
    });
}

main();
