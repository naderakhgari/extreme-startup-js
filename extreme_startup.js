var express = require("express");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var  { largest } = require('./solutions/largest');
var  { plus, plus3 } = require('./solutions/plus');
var  { primes } = require('./solutions/primes');
var  { jamesBond } = require('./solutions/jamesBond');
var  { multiply } = require('./solutions/multiply')
var  { squareAndCube } = require('./solutions/square-and-cube');
const { power } = require("./solutions/power");
const { minus } = require("./solutions/minus");

/* Reimplement this function to answer questions. */
var answer = function(question, req, res) {
    let funcs = [largest, plus3, plus, multiply, squareAndCube, jamesBond, primes, power, minus];
    for(let func of funcs) {
      let result = func(question);
      if (result !== undefined) {
        return result;
      }
    }
    return `Question ${question} not recognised`;
};

var app = express();

app.use(cookieParser());
app.use(session({
    "secret": "bodilpwnz"
}));

app.get("/", function(req, res) {
    var q = req.param("q");
    var a = answer(q, req, res);
    console.log("Q: \"" + q + "\" A:\"" + a + "\"");
    res.send(a);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});


