var request = require("request")
var cheerio = require("cheerio")


var url = "http://allrecipes.com/search/results/?wt=chicken&sort=re"
const baseurl = "http://allrecipes.com/search/results/"

function x() {
    request(url, function(error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);
            var name = $("[class='grid-col__h3 grid-col__h3--recipe-grid']").text();
            var body = $("[class='rec-card__description']").text();
            var img = $("[class='grid-col__rec-image']").attr("data-original-src");
            var imgs = $("[class='grid-col__rec-image']").get()
            name = stripInputToArray(name);
            console.log(name);
            console.log(body);
            console.log(img);
            console.log(imgs[0]);
        }
    });
}

function stripInputToArray(str) {
    return str.replace(/\s\s+/g, "$").split("$");
}

function cleanArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        thisVal = arr[i];
        if (thisVal == "" || thisVal = null || thisVal == undefined) {
            continue
        }

        if (thisVal.match(""))
    }
}

/**
    Returns a list of objects, each with fields that can
    be used to access picture, title, or description.
*/
function getParsedRecipesFromGrids(searchQuery) {
    var numReturned = 6;
    request(url, function(error, response, body) {
        if (error) {
            // handle error
            console.error("Error in getting recipes from grids: " + error);
            return
        }
        var $ = cheerio.load(body);

        // get all recipe names
        var name = $("[class='grid-col__h3 grid-col__h3--recipe-grid']").text();
        name = stripInputToArray(name).slice(0, numReturned);
        console.log(name);

        // get all recipe descriptions
        // var body = $("[class='rec-card__description']").text();
        // console.log(body);
        var body = $("[class='rec-card__description']").get().map(function(obj) {return obj["children"][0]["data"]}).slice(0, numReturned);
        console.log(body);

        // get all recipe image links
        var imgs = $("[class='grid-col__rec-image']").get().map(function(obj) {return obj["attribs"]["data-original-src"]}).slice(0, numReturned);
        console.log(imgs);

        console.log(name.length + " " + body.length + " " + imgs.length);
    });
}

getParsedRecipesFromGrids();

// function getURL(searchQuery, sortType="re") {
//     return baseurl + "?wt=" + searchQuery + "sort=" + sortType;
// }
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
