'use strict';
var _ = require('lodash');

module.exports = function(data) {
    var posts = data.data.children;
    var last_post = _.last(posts);
    var author = last_post.data.author;
    return author;
};


