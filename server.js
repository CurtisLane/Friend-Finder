// Required dependencies
var express = require("express");
var path = require("path");

// Set up app with express
var app = express();
var PORT = 8080;

// Data parsing with express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// App listening on port
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});
  