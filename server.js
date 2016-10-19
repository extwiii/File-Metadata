var express = require('express');
var app = express();
var path = require('path');
var multer  = require('multer');
var upload = multer()

app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/metadata', upload.single('file'), function (req, res, next) {
  var data = {
        'name': req.file.originalname,
        'size': req.file.size + ' KB',
        'type': req.file.mimetype
    } 
	res.send(data);
})
// Set port
var port = process.env.PORT || 3000; 

app.listen(port, function () {
  console.log('Node.js listening on port ' + port);
});




