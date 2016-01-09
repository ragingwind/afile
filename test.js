'use strict';

import test from 'ava';
import afile from './';
import path from 'path';

const targets = [
	process.cwd(),
	process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'],
	'/'
].map(function (p) {
	return path.join(p, '.bashrc');
});

test(t => {
	return afile(targets).then(f => {
		t.ok(f);
	}, () => {
		t.fail();
	});
});

test(t => {
	afile.cb(targets, f => {
		t.ok(f);
	});
});
