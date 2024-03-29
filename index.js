var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/build'));

app.all('/*', function(req, res, next) {
  res.sendFile('build/index.html', { root: __dirname });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


