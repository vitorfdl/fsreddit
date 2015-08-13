"use strict";
var lib        = require("../../lib/");
var mock_dilma = require("../mocks/dilma.js");
var mock_obama = require("../mocks/obama.js");

var assert = require("assert");

suite("Get Comment Numbers", function() {
    test("Dilma Success", function() {
        var result = lib.get_ncomments(mock_dilma);
        assert.ok(result);
        assert.equal(result, 468);
    });

    test("Obama Success", function() {
        var result = lib.get_ncomments(mock_obama);
        assert.ok(result);
        assert.equal(result, 10084);
    });
});