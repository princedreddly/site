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
let sPort = 80; //server port

live = !true; // disable ngrok if using nodemon

// Use ngrok to host server
if (live) {
    (async function () {
        const url = await ngrok.connect();
        date = new Date().toLocaleTimeString();

        var twirlTimer = (function () {
            var P = [".  ", ".. ", "...", "   "];
            var x = 0;
            return setInterval(function () {
                process.stdout.write("\r" + 'Server running ' + P[x++] + '          ');
                x &= 3;
            }, 1000);
        })();
        // var twirlTimer = (function () {
        //     var P = ["\\", "|", "/", "-"];
        //     var x = 0;
        //     return setInterval(function () {
        //         process.stdout.write("\r" + 'Server running ' + P[x++] + '          ');
        //         x &= 3;
        //     }, 100);
        // })();


        ////console.log('\n\nServer started at ' + date);
        console.log("\ninspect \t =>\t\t>>> http://localhost:4040/ <<<\n");
        console.log("server    \t =>\t\t>>> " + url + "/ <<<\n\n\n");

    })();
}


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