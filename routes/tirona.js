var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send({status:200,message:"boom boom boatng"});
});
router.get('/otr', function(req, res, next) {
    res.send({status:200,message:"boom otr"})
  });
module.exports = router;
