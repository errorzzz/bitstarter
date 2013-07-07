var fs = require('fs');
fs.readFile('index.html', function(err, buf) {
  console.log(buf.toString());
});


