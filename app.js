const express = require("express");
const app = express();
var jquery = require('jquery');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



//use
app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


//default extentions
app.set('view engine', 'ejs');
app.set('css engine', 'scss');


/* Post *\
\*      */
app.post('/games/postGame', urlencodedParser, (req, res) => {
    console.log(req.body);

});


/* Routes *\
\*        */

//home
app.get('/', (req, res) => {
    res.render("home");
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

<<<<<<< HEAD

=======
>>>>>>> 66522f11b5a4b6ed1bcf7b62415374cbf751dfad
/* Routes *\
\* ERRORS */
//ERROR_404
app.get('*', (req, res) => {
    res.render("Error404");
});

/////////////////////////////////////////

<<<<<<< HEAD

=======
jo = {
    "name": "Anthem",
    "platform": ["platform"],
    "genre": ["RPG"],
    "tags": ["tag 1", "tag 2"],
    "releasedate": "February 22, 2019",
    "releasedatesort": "2019-02-22",
    "url": "/games/anthem",
    "publisher": "Electronic Arts"
}
>>>>>>> 66522f11b5a4b6ed1bcf7b62415374cbf751dfad

/* Start Server on port 80 *\
\*                         */
app.listen(80, () => {
<<<<<<< HEAD
    date = new Date();
    return console.log('Server ready at ' + date);
=======
    date = new Date(jo.releasedate).toDateString();
    return console.log('Server started at ' + date);
>>>>>>> 66522f11b5a4b6ed1bcf7b62415374cbf751dfad
    
});