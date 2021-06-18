var express = require("express");

function largest(numString) {
  let numbers = numString.split(", ").map(n => parseInt(n));
  let max = numbers.reduce((mx, item) => Math.max(mx, item));
  return max;
}

/* Reimplement this function to answer questions. */
var answer = function(question, req, res) {
    if (question.indexOf('is the largest') !== -1) {
      let numSeparatorIndex = question.lastIndexOf(':');
      if (numSeparatorIndex !== -1) {
        return "" + largest(question.substring(numSeparatorIndex + 1));
      } else {
        return "didn't find arguments";
      }
    }
    return `didn't recognise question ${question}`;
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

