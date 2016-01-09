'use strict';

var fs = require('fs');

function findone(targets, cb) {
	if (targets.length === 0) {
		cb(null);
		return;
	}

	var target = targets.pop();
	fs.stat(target, function (err) {
		if (err) {
			findone(targets, cb);
		} else {
			cb(target);
			return;
		}
	});
}

function afile(targets, cb) {
	if (!Array.isArray(targets)) {
		targets = [targets];
	}

	findone(targets.slice(0), cb);
}

module.exports = function (targets) {
	return new Promise(function (resolve, reject) {
		afile(targets, function (f) {
			if (f) {
				resolve(f);
			} else {
				reject(new Error('Not found a file'));
			}
		});
	});
};

module.exports.cb = afile;
