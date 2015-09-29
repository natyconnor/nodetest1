var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Via Bahia' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection'); // name of collection in mongo
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs // sets the json returned from mongo to the variable userlist available in the view
        });
    });
});

module.exports = router;
