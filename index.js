'use strict';
var request = require('request');
var async = require('async');
var search_objects = {};
var _ = require('lodash');
var lib = require('./lib');

var keywords = process.argv.slice(2,process.argv.length);
var create_function = function(query) {
    var options = {
        'url': "http://www.reddit.com/search.json",
        'method': 'GET',
        'qs': {
            'q': query,
            'sort': 'new'
        }
    };
    return function(cb) {
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
        num_comments[k] = lib.get_ncomments(data);
        var number_posts = lib.get_numberposts(data);
        var lastpost_author = lib.get_lastpostauthor(data);

        console.log(k + " have a total of " + number_posts + " of posts" );
        console.log(k + " author of the last post is " + lastpost_author);
        console.log(k + " sum of comments of all posts is " + num_comments[k]);
        console.log(" ");
    });

    var comments_percent = lib.compare_comments(num_comments);
    var calc_str = "";
    _.forIn(comments_percent, function(data, k) {
        calc_str = calc_str + k + " had a " + data + "% of posts; ";
    });

    console.log(calc_str);


});

