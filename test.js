'use strict';

import path from 'path';
import test from 'ava';
import afile from './';

const targets = [
	process.cwd(),
	process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'],
	'/'
].map(function (p) {
	return path.join(p, '.bashrc');
});

test(t => {
	return afile(targets).then(f => {
		t.truthy(f);
	}, () => {
		t.fail();
	});
});
