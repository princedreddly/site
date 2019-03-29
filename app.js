const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const json2csv = require('json-2-csv');
const router = require('./routes.js');




//SECTION Server settings

//Vars
let sPort = process.env.PORT || 80; //server port


// Start Server
app.listen(sPort, () => {
    date = new Date().toLocaleTimeString();
    console.clear();
    return console.log('Server ready locally on port ' + sPort + ' at ' + date + '\n\nlocal   \t =>\t\t>>> http://localhost:' + sPort + ' <<<');

});

//!SECTION 


app.use(express.static("public"));
app.use(router)


//engines
app.set('view engine', 'ejs');
app.set('css engine', 'scss');
