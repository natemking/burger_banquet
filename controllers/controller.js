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

//*** API Routes ***//
//==================//
router.route('/api/burgers/:id?')
.get((req,res) => {
    const id = req.params.id;
    burger.all((data) => {
        res.json(data);
    });
});

//*** HTML Routes ***//
//===================//
//Root route
router.route('/')
.get((req, res) => {
    burger.all((data) => {
        res.render(index, {burgers: data});
    });
});

router.post('/insert', (req, res) => {
    burger.insertOne('burger_name', req.body.burger, ()=>{
        res.redirect('/');
    });
});

router.put('/update/:id', (req, res) => {
    let con = `id = ${req.params.id}`;
    burger.updateOne('devoured = 1', con, () => {
        res.redirect('/');
    }); 
});

router.delete('/delete/:id', (req, res) => {
    let con = {id: req.params.id};
    burger.deleteOne(con, () => {
        res.redirect('/');
    });
});

// Catch all redirects to root
router.all('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;