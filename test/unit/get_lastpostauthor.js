"use strict";
var lib        = require("../../lib/");
var mock_dilma = require("../mocks/dilma.js");
var mock_obama = require("../mocks/obama.js");

var assert = require("assert");

suite("Get Last Author", function() {
    test("Dilma Success", function() {
        var result = lib.get_lastpostauthor(mock_dilma);
        assert.ok(result);
        assert.equal(result, "conspirobot");
    });

    test("Obama Success", function() {
        var result = lib.get_lastpostauthor(mock_obama);
        assert.ok(result);
        assert.equal(result, "cisco45");
    });
});