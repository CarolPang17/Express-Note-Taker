// Require express and files
const express = require("express");
const fs = require("fs");
const db = require("./db/db.json");
var path = require("path");
//Require routes file
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// // Initialize express app
const PORT = process.env.PORT || 3001;
const app = express();

// adding middleware function for parse incomingstring or array data / JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// require("./routes")

app.get("/", function (req, res) {
    console.log('we got the first get')
    res.send("");
});

app.get("/api/notes", function (req, res) {
    return res.json(notes);
})

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});