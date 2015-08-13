"use strict";
var _ = require("lodash");

module.exports = function(data) {
    var posts        = data.data.children;
    var num_comments = _.sum(posts, function(x) { return x.data.num_comments; });
    
    return num_comments;
};


