const express = require('express');
const router = express.Router();
const fs = require('fs');

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

//SECTION 

//!SECTION 



module.exports = router