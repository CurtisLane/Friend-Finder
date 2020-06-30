// Required dependencies
const express = require('express');
const favicon = require('serve-favicon')
const path = require("path");

// Set up app with express
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'images')))
app.use(favicon(path.join(__dirname,'/images/favicon.ico')));


// Server routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// App listening on port
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});
  