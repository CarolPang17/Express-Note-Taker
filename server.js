// Require express and files
const express = require("express");
const fs = require("fs");
//Require routes file
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize express app
const PORT = process.env.PORT || 3001;
const app = express();

// adding middleware function for parse incomingstring or array data / JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});