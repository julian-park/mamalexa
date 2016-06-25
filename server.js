// Node packages
var app = require('express')();
// var db = require('mysql');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
// Configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer({dest:'./uploads/'}).single('singleInputFileName'));

function main() {
    app.post("/", function(req, res) {
        // HTTP requests are received through req
        // HTTP responses are sent back through res
        var request = req.body;

        if (request["action"] == "yourAction") {
            // do something
        }
    });
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));

    });

    app.listen(3000, function() {
        console.log("Listening on port 3000.");
    });
}

main();
