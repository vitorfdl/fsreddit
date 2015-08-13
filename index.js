"use strict";
var request        = require("request");
var async          = require("async");
var search_objects = {};
var _              = require("lodash");
var lib            = require("./lib");
var format         = require("util").format;


var keywords = process.argv.slice(2,process.argv.length);
var create_function = function(query) {
    var options = {
        "url"   : "http://www.reddit.com/search.json",
        "method": "GET",
        "qs": {
            "q"   : query,
            "sort": "new"
        }
    };
    
    return function(cb) {
        console.log(format("Wait a moment when we are getting all informations from reddit for %s", query));
        request(options, function(err, result) {
            cb(err, JSON.parse(result.body));
        });
    };
};

keywords.forEach(function(k) {
    search_objects[k] = create_function(k);
});

async.parallel(search_objects, function(err, results){
    if (err) { return console.log("erro", err); }
    var num_comments = {};

    _.forIn(results, function(data, k) {
        num_comments[k]     = lib.get_ncomments(data);
        var number_posts    = lib.get_numberposts(data);
        var lastpost_author = lib.get_lastpostauthor(data);

        console.log(format("\n%s have a total of %s of posts", k, number_posts));
        console.log(format("%s author of the last post is '%s'", k, lastpost_author));
        console.log(format("%s sum of comments of all posts is %s", k, num_comments[k]));
    });

    var comments_percent = lib.compare_comments(num_comments);

    var calc_str = "\n";
    _.forIn(comments_percent, function(data, k) {
        calc_str += format("%s has %s% of posts; ", k, data);
    });

    console.log(calc_str);
});

