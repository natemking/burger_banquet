//*** Dependencies ***//
//====================//
const express = require('express');
const path = require('path');

//*** Directories ***//
//===================//
const MODELS_DIR = path.resolve(__dirname, '../models');
const VIEWS_DIR = path.resolve(__dirname, '../views');

//*** Modules ***//
//===============//
const burger = require(`${MODELS_DIR}/burger`);
const index = path.join(VIEWS_DIR, 'index');

//*** Express router ***//
//======================//
const router = express.Router();

//*** API Routes ***//
//==================//
router.route('/api/burgers/:id?/:devoured?')
.get((req,res) => {
    const id = req.params.id;
    burger.all((data) => {
        if(id){
            for (const burger of data){
                burger.id === parseFloat(id) ? res.json(burger) : null;   
            }
        } else res.json(data);
    });
})
.post((req, res) => {
    burger.insertOne('burger_name', req.body.burger, (result) => {
        res.json({id: result.insertId});
   });
})
.put((req, res) => {
    burger.updateOne(`${Object.keys(req.params)[1]}`, req.params.devoured, `${Object.keys(req.params)[0]}`, req.params.id, () => {
        res.end();
    });
})
.delete((req, res) => {
    burger.deleteOne(`${Object.keys(req.params)[0]}`, req.params.id, () => {
        res.end();
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

// Catch all redirects to root
router.all('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;