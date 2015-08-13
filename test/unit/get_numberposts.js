"use strict";
var lib = require("../../lib/");
var mock_dilma = require("../mocks/dilma.js");
var mock_obama = require("../mocks/obama.js");

var assert = require("assert");

suite("Get Posts Numbers", function() {
    test("Dilma Success", function() {
        var result = lib.get_numberposts(mock_dilma);
        assert.ok(result);
        assert.equal(result, 13);
    });

    test("Obama Success", function() {
        var result = lib.get_numberposts(mock_obama);
        assert.ok(result);
        assert.equal(result, 25);
    });
});