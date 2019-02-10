var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
Post = require('./api/models/postModel');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.1/Posts');

var routes = require('./api/routes/routes');
routes(app);

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
})


