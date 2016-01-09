'use strict';

var fs = require('fs');

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

function findoneSync(targets) {
	for (var i = 0; i < targets.length; ++i) {
		try {
			if (fs.statSync(targets[i]).isFile()) {
				return targets[i];
			}
		} catch (e) {}
	}

	return null;
}

function afile(targets, cb) {
	if (cb) {
		return findone(arrify(targets), cb);
	}

	return findoneSync(arrify(targets));
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

module.exports.cb = module.exports.sync = afile;
