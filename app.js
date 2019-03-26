const express = require("express");
let app = express();
const jquery = require('jquery');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});
const ngrok = require('ngrok');
const json2csv = require('json-2-csv');




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



//static files
app.use(express.static("public"));


//default extentions
app.set('view engine', 'ejs');
app.set('css engine', 'scss');



/* Routes *\
\*        */

//home
app.get('/', (req, res) => {
    res.render("home");
});

/*   Post   *\
\* DBinsert */

app.get('/idb', (req, res) => {
    res.render("insertDatabase");
});
app.post('/', (req, res) => {

});
/* Routes *\
\*  games */
//games
app.get('/games', (req, res) => {
    res.render("games");
});

app.get('/games/:gamePage', (req, res) => {
    const gamepage = req.params.gamePage;
    res.render("games/" + gamepage);
});

app.use('/games/*', (error, req, res, next) => {
    res.status(500);
    res.render('games/gameNotListed', {
        title: '500: Internal Server Error',
        error: error
    });
});

/* Routes *\
\*  media */
//media
app.get('/media', (req, res) => {
    res.render("media");
});

/* Routes *\
\*  tools */
//tools
app.get('/tools', (req, res) => {
    res.render("tools");
});

/* Routes *\
\*   me   */
//me
app.get('/me', (req, res) => {
    res.render("me");
});


/* Routes *\
\* ERRORS */
//ERROR_404
app.get('*', (req, res) => {
    res.render("Error404");
});

/////////////////////////////////////////