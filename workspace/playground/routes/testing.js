var express = require('express');
var router = express.Router();

var fileName = "*" + __filename + "*";

router.get('/', function(req, res, next) {

  console.log("*********Server Side*********");
  console.log("GET Request", fileName);
  console.log(__filename);
  res.render('testing', {
    title: "Welcome"
  });
});

router.post('/', function(req, res, next) {

  console.log("*********Server Side*********");
  console.log("POST Request", fileName);
  var expression = req.body["operand1"] + req.body["operator"] + req.body["operand2"];
  console.log("Expression is: ", expression);

  //  console.log("Evlautated to: ", eval(expression));
  //  setTimeout(function() {
  res.json({
    mystring: 'POST request to /testing',
    answer: expression
  });
  //  }, 2000);
});
/*
router.post('/books', function(req, res, next) {
var book = new Book(req.body);

book.save(function(err, book) {
  if (err) {
    return next(err);
  }

  res.json(book); //<--This controls adding the book when a post happens
  console.log("Books page Post request!");
  console.log(req.body);
  console.log("Title: " + req.body.title)
});
});
*/
/*
router.get('/:id', function(req, res, next) {
console.log('Made it to: ' + req.params.id );
//  res.render();
});
*/
module.exports = router;
