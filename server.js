const express = require("express")
const mongoose = require("mongoose")

const app = express()

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/twilightApi";

// mongoose.connect(MONGODB_URI, {useNewUrlParser:true})

// settings


app.use(express.static(__dirname + '/dist/'))

app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app);


var server = app.listen(process.env.PORT || 1337, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  })