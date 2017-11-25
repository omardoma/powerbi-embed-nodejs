const express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  helmet = require('helmet'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  routes = require('./api/routes/index'),
  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(helmet({
  noCache: true
}));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', routes);

app.use(function (req, res) {
  res.redirect('/');
});

module.exports = app;