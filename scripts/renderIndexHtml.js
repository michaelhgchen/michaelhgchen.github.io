var fs = require('fs');
var htmlString = require('../dist/bundle');

fs.writeFile('index.html', htmlString.default, () => null);
