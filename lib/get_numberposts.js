"use strict";

module.exports = function(data) {
    var posts     = data.data.children;
    var posts_num = posts.length;
    
    return posts_num;
};

