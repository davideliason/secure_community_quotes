var express = require("express");
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config()

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_MLAB);
var userSchema = new mongoose.Schema({
    email: String,
    password: String
});
var User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/adduser", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});