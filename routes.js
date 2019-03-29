const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');

//SECTION Root

//home page
router.get('/', (req, res) => {
    res.render("home");
});

//!SECTION Root

//SECTION Games

router.get('/games', (req, res) => {
    res.render("games");
});

router.get('/games/:gamePage', (req, res) => {
    const gamepage = req.params.gamePage;
    
    fs.access("views/games/" + gamepage + '.ejs', fs.F_OK, (err) => {
        if (err) {
            res.render('games/gameNotListed');
            return
        }
        res.render("games/" + gamepage);
    });
});

//!SECTION Games

//SECTION Media

app.get('/media', (req, res) => {
    res.render("media");
});

//!SECTION Media

//SECTION Tools

app.get('/tools', (req, res) => {
    res.render("tools");
});

//!SECTION Tools

//SECTION Me

app.get('/me', (req, res) => {
    res.render("me");
});

//!SECTION Me

//SECTION Errors

//ERROR_404: page not found
app.get('*', (req, res) => {
    res.render("Error404");
});

//!SECTION Errors



module.exports = router










