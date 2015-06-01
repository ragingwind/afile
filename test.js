'use strict';

var path = require('path');
var assert = require('assert');
var afile = require('./');

it('should find bashrc', function () {
	var targets = [
		process.cwd(),
		process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'],
		'/'
	].map(function(p) {
		return path.join(p, '.bashrc');
	});

	afile(targets, function(afilepath) {
		assert(afilepath.indexOf(afilepath) >= 0)
	});
});
