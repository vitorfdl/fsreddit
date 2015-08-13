"use strict";
var _ = require("lodash");

module.exports = function(sumcomments_json) {
    var total_comments   = _.sum(sumcomments_json);
    var comments_percent = {};

    _.forIn(sumcomments_json, function(value, key) {
        var calc = Number((value * 100 / total_comments).toFixed(2));
        if (Number.isNaN(calc)) { calc = "not a number"; }

        comments_percent[key] = calc;
    });

    return comments_percent;
};