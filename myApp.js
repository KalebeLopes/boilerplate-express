var express = require('express');
var app = express();

// app.use(function(req, res, next) {
//   console.log(req.method + " " + req.path + " - " + req.ip);
//   next();
// });

// app.get('/', (req, res) => {
//   console.log("aq")
//   res.send('Hello Express')
// } )

// app.use('/public', express.static(__dirname + "/public"));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/views/");
// })

// app.get("/json", function(req, res) {
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     res.json({ "message": "HELLO JSON" });
//   } else {
//     res.json({ "message": "Hello json" });
//   }
// })

// app.get('/now', function(req, res, next) {
//   req.time = new Date().toString();
//   next();
// }, function(req, res) {
//   var time = `{"time": "${req.time}"}`
//   time = JSON.parse(time);

//   res.json(time)
// })

app.get('/echo/:word', (req, res) => {
  var echo = req.params.word;

  res.json(echo);
})


module.exports = app;

