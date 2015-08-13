"use strict";
var lib    = require("../../lib/");
var assert = require("assert");

suite("Compare Sum Number of Comments", function() {
    test("Get Percent Success", function() {
        var result = lib.compare_comments({"dilma": 468, "obama": 10048, "binladen": 50058});
        assert.ok(result);
        assert.equal(result.dilma, 0.77);
        assert.equal(result.obama, 16.59);
        assert.equal(result.binladen, 82.64);
    });
    test("Get Percent Error", function() {
        var result = lib.compare_comments({"dilma": "p", "obama": 10048, "binladen": 50058});
        assert.ok(result);
        assert.equal(result.dilma, "not a number");
        assert.equal(result.obama, 16.72);
        assert.equal(result.binladen, 83.28);
    });
});