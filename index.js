'use strict';

const fs = require('fs');

function arrify(a) {
	if (!Array.isArray(a)) {
		a = [a];
	}

	return a.slice(0);
}

function findone(targets, cb) {
	if (targets.length === 0) {
		cb(null);
		return;
	}

	var target = targets.shift();
	fs.stat(target, function (err, stat) {
		if (err || !stat.isFile()) {
			findone(targets, cb);
		} else {
			cb(target);
			return;
		}
	});
}

function afile(targets, cb) {
	return findone(arrify(targets), cb);
}

module.exports = function (targets) {
	return new Promise(function (resolve, reject) {
		afile(targets, f => f ? resolve(f) : reject(new Error('Not found a file')));
	});
};
