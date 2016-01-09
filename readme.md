# afile [![Build Status](https://travis-ci.org/ragingwind/afile.svg?branch=master)](https://travis-ci.org/ragingwind/afile)

> Find a file in the list


## Install

```
$ npm install --save afile
```


## Usage

```js
var afile = require('afile');
var targets = [
	process.cwd(),
	process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'],
	'/'
].map(p => {
	return path.join(p, '.bowerrc');
});

// promise supports
afile(targets).then(function (f) {
	console.log(f);
	//=> /home/yours/.bowerrc
}, function () {
	// not in the list
});

// callback style
afile(targets, f => {
	console.log(f);
	//=> /home/yours/.bowerrc
});
```


## API

### afile(tagets)

return promise, will resolve if target file is exist.

### afile.cb(tagets, cb)

callback style, will pass with target file or not.

## License

MIT © [Jimmy Moon](http://ragingwind.me)
