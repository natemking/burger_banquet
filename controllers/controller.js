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

//*** HTML Routes ***//
//===================//
//Root route
router.route('/')
.get((req, res) => { 
    res.render(index);
})
//Catch all redirects to root
router.all('*', (req, res) => {
  res.redirect('/');
})

module.exports = router;