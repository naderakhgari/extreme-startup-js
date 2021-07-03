var express = require("express");
var  { largest } = require('./solutions/largest');
var  { plus } = require('./solutions/plus');

/* Reimplement this function to answer questions. */
var answer = function(question, req, res) {
    let funcs = [largest, plus, multiply];
    for(let func of funcs) {
      let result = func(quesion);
      if (result !== undefined) {
        return result;
      }
    }
    return "Question ${question} not recognised";
};

var app = express.createServer();
app.use(express.cookieParser());
app.use(express.session({
    "secret": "bodilpwnz"
}));

app.get("/", function(req, res) {
    var q = req.param("q");
    var a = answer(q, req, res);
    console.log("Q: \"" + q + "\" A:\"" + a + "\"");
    res.end(a);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, "0.0.0.0");
console.log(`Server running on http://0.0.0.0:${port}/`);

