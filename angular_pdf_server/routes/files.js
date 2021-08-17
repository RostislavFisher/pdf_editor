var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});

router.post('/saveFile/:fileName', function(req, res, next) {
    fs.writeFile(`htmlFiles/${req. param("fileName")}`, req.body.params.htmlCode, function (err,data) {
        if (err) {
            return console.log(err);
        }
            });
});

router.get('/getFileHTML/:fileName', function(req, res, next) {
    fs.exists(`htmlFiles/${req. param("fileName")}`, function fileExists(exists) {
        if (exists) {
            fs.readFile(`htmlFiles/${req. param("fileName")}`, 'utf8', function(err, data) {
                res.send(data);
            });
        }
        else{
            fs.readFile('htmlFiles/htmlNULL.html', 'utf8', function(err, data) {
                res.send(data);
            });
    }});
});

router.get('/downloadFilePDF/:fileName', function(req, res, next) {
    var pdf = require('html-pdf');
    var options = { format: 'Letter' };
    fs.exists(`htmlFiles/${req. param("fileName")}`, function fileExists(exists) {
        if (exists) {
            fs.readFile(`htmlFiles/${req. param("fileName")}`, 'utf8', function(err, data) {
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'application/pdf'});
                pdf.create(data, options).toBuffer(function(err, buffer){
                    res.end(buffer, 'binary');
                })
            });
        }
        else{
            fs.readFile('htmlFiles/htmlNULL.html', 'utf8', function(err, data) {
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'application/pdf'});
                pdf.create(data, options).toBuffer(function(err, buffer){
                    res.end(buffer, 'binary');
                })
            });
        }});


});
module.exports = router;
