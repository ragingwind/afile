'use strict';

import test from 'ava';
import afile from './';
import path from 'path';

test(t => {
	const targets = [
		process.cwd(),
		process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'],
		'/'
	].map(function (p) {
		return path.join(p, '.bashrc');
	});

	afile(targets, afilepath => {
		t.ok(afilepath.indexOf(afilepath) >= 0);
	});
});
