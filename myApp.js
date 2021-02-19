var express = require('express');
var app = express();

var bodyParser = require('body-parser');

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

// app.use("/json", function(req, res) {
//   console.log(process.env.MESSAGE_STYLE);
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     res.json({ "message": "HELLO JSON" });
//   } else {
//     res.json({ "message": "Hello json" });
//   }
// })

// app.get("/now", function(req, res, next) {
//   req.time = new Date().toString();
//   next();
// }, function(req, res) {
//   var time = `{"time": "${req.time}"}`
//   time = JSON.parse(time);
//
//   res.json(time)
// });


app.get('/echo/:word', (req, res) => {
  var word = req.params.word;
  var response = `{"echo": "${word}"}`
  console.log(req.params);
  
  res.json(JSON.parse(response));
})

// app.get('/name', (req, res) => {
//   var query = req.query;
//   var name = query.first + ' ' + query.last;
//   var nameJson = `{"name": "${name}"}`; 
//
//   nameJson = JSON.parse(nameJson);
//
//   console.log(nameJson);
//
//   res.json(nameJson);
// })

// bodyParser para analisar requisição POST
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
//
// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// })


// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
//
// app.post('/name', (req, res) => {
//   var firsLast = req.body.first + ' ' + req.body.last;
//   var name = `{"name": "${firsLast}"}`; 
//
//   name = JSON.parse(name);
//
//   console.log(name);
//   res.json(name)
// })

module.exports = app;

