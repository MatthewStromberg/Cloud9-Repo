var express = require('express');
var router = express.Router();

/*
Uses a RELATIVE route. '/' will always refer to the 
current page that this route uses (here, its the root),
and then all other routes are sub-directories
*/


/* GET home page. */
router.get('/', function(req, res, next) {
    log();
    //    console.log(req.body);
    console.log("Index.js calling index.ejs");
    //    console.log(req);
    res.render('index', {
        title: req.params.id
    });
});



module.exports = router;


var log = function() {
    console.log("*****************");
};
