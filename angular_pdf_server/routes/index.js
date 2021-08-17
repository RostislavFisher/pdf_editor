var express = require('express');
const app = express();
var router = express.Router();

router.post('/saveFile', function(req, res, next) {
  res.send('respond with a resource');

});

app.all('*', function(req,res){
  res.status(200).sendFile(__dirname + '/dist/index.html');
});
module.exports = router;
