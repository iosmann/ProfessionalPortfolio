var express = require("express");
var path = require("path");
// EXPRESS CONFIGURATION
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('public'))
// If no matching route is found default to home
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// LISTENER`

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
