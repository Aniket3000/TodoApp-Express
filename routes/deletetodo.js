const express = require('express');
const router = express.Router();

// const {homepge,todos,item_count} = require('./home.js');
router.get('/deletetodo', (req, res) => {
    let key = (Object.keys(req.query));
    item_count -= key.length;
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < todos.length; j++) {
            if (key[i] == todos[j]) {
                todos.splice(j, 1);
            }
        }
    }
    // todos.splice(key,1);
    // console.log(key);
    // [key,val] = 
    // let todelete = req.query[0]
    res.redirect('/');
})

module.exports = router;