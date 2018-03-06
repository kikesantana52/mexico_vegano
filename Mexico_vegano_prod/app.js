var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

//Conection to DB
mongoose.connect("mongodb://localhost:27017/MexicoVegano");

app.get('/', (req, res) => {

});

app.listen(2000, function () {
  console.log(`Server Starts on port 2000`);
});
