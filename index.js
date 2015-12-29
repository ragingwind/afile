'use strict';

var fs = require('fs');
var path = require('path');

function findone(targets, cb) {
	if (targets.length === 0) {
		cb(null);
		return;
	}

	var target = targets.pop();
	fs.stat(target, function(err, stats) {
		if (err) {
			findone(targets, cb);
		} else {
			cb(target);
			return;
		}
	});
}

module.exports = function (targets, cb) {
	if (!Array.isArray(targets)) {
		targets = [targets];
	}

	findone(targets, cb);
};
