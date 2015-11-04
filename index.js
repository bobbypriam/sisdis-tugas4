var express = require('express');

var app = express();

function respond() {
  var count = 1;
  return function (req, res) {
    res.send(
      "<html>" +
      "<body>" +
      "IP: 10.10.100.38<br>" +
      "NAMA: Widyanto Bagus Priambodo<br>" +
      "CNT: " + (count++) + "<br>" +
      "</body>");
  };
};

app.use(respond());

app.listen(9000);
