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
    res.render('home', { title: 'Home' });
});

router.get('/course', function(req, res, next) {
    res.render('course', { title: 'Course' });
});

router.get('/activity', function(req, res, next) {
    res.render('activity', { title: 'Activity' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About' });
});

router.get('/article', function(req, res, next) {
    res.render('article', { title: 'Article' });
});

router.get('/coursedetail', function(req, res, next) {
    res.render('coursedetail', { title: 'Coursedetail' });
});

module.exports = router;