# afile [![Build Status](https://travis-ci.org/ragingwind/afile.svg?branch=master)](https://travis-ci.org/ragingwind/afile)

> Find a file on the list


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
].map(function(p) {
	return path.join(p, '.bowerrc');
});

afile(targets, function(afilepath) {
	console.log(afilepath);
	//=> /home/yours/.bowerrc
});
```
## API

### afile(tagets, cb);

## License

MIT © [ragingwind](http://ragingwind.me)
