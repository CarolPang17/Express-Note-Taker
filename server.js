// Require express and files
var express = require("express");
var fs = require("fs");
var notesData = require("./db/db.json");
var path = require("path");

// // Initialize express app
var PORT = process.env.PORT || 3001;
var app = express();

// adding middleware function for parse incomingstring or array data / JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


var currentID = notesData.length;
var newNote;

app.get("/api/notes", function (req, res) {
    return res.json(notesData);
})


app.post("/api/notes", function (req, res) {
    newNote = req.body;

    currentID++;

    newNote["id"] = currentID;

    notesData.push(newNote);

    updateNotesData();

    return res.status(200).end();
});


//html routes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});


// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

function updateNotesData() {
    fs.writeFile("./db/db.json", JSON.stringify(notesData), function (err) {
        if (err) {
            console.log("error")
            return console.log(err);
        }

        console.log(`New new note ${JSON.stringify(newNote)} has been added to notesData`);
    });
}