//*** Dependencies ***//
//====================//
const express = require('express');
const path = require('path');

//*** Directories ***//
//===================//
const MODELS_DIR = path.resolve(__dirname, '../models');
const VIEWS_DIR = path.resolve(__dirname, '../views');
const index = path.join(VIEWS_DIR, 'index')


//*** Modules ***//
//===============//
const burger = require(`${MODELS_DIR}/burger`);

//*** Express router ***//
//===============//
const router = express.Router();


router.route('/')
.get((req, res) => { 
    // res.render(index)
    res.send('You got it dude')
});

module.exports = router;