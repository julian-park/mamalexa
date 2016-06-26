var request = require("request")
var cheerio = require("cheerio")


var url = "http://allrecipes.com/search/results/?wt=chicken&sort=re"
const baseurl = "http://allrecipes.com/search/results/"





request(url, function(error, response, body) {
    if (!error) {
        var $ = cheerio.load(body);
        var name = $("[class='grid-col__h3 grid-col__h3--recipe-grid']").text();
        var body = $("[class='rec-card__description']").text();
        var img = $()
        name = stripInputToArray(name);
        console.log(name);
    }
});

function stripInputToArray(str) {
    return str.replace(/\s\s+/g, ",").split(",");
}

/**
    Returns a list of objects, each with fields that can
    be used to access picture, title, or description.
*/
function getParsedRecipesFromGrids(searchQuery) {

}

function getURL(searchQuery, sortType = "re") {
    return baseurl + "?wt=" + searchQuery + "sort=" + sortType;
}
// picture
// title
// description

// {
//     searchQuery : "chicken",
//     results : [
//         {
//             picture : "url",
//             title : "CHICKEN POT",
//             desc: "desc",
//             url : "URL"
//         }
//     ]
// }
