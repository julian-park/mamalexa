var request = require("request")
var cheerio = require("cheerio")
url = "http://allrecipes.com/search/results/?wt=chicken&sort=re"

request(url, function(error, response, body) {
    if (!error) {
        var $ = cheerio.load(body);
        var name = $("[class='grid-col__h3 grid-col__h3--recipe-grid']").html();
        console.log(name);
    }
});
