var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/3', function(req, res, next) {
  res.render('index3', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/course', function(req, res, next) {
  res.render('course', { title: 'Express' });
});

module.exports = router;
