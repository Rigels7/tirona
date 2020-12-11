var express = require('express');
var path = require('path');


var indexRouter = require('./routes/index');
const tironaRouter = require ('./routes/tirona');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/tirona',tironaRouter);

module.exports = app;
