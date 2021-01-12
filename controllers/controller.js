//*** Dependencies ***//
//====================//
const express = require('express');
const path = require('path');
const { resourceUsage } = require('process');

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
router.route('/api/burgers/:id?/:devoured?')
.get((req,res) => {
    const id = req.params.id;
    burger.all(() => {
        res.end();
    });
})
.post((req, res) => {
    burger.insertOne('burger_name', req.body.burger, (result) => {
        res.json({id: result.insertId});
   });
})
.put((req, res) => {
    //Toggle devoured so the burger can move to the appropriate table
    // req.params.devoured = 1 - req.params.devoured;
    //Update if burger has been eaten or made again
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
//Add a burger
// router.post('/insert', (req, res) => {
//     burger.insertOne('burger_name', req.body.burger, ()=>{
//         res.redirect('/');
//     });
// });
//Devour a burger or add it back to the menu
// router.put('/update/:id/:devoured', (req, res) => {
//     //Toggle devoured so the burger can move to the appropriate table
//     req.params.devoured = 1 - req.params.devoured;
//     //Update if burger has been eaten or made again
//     burger.updateOne(`${Object.keys(req.params)[1]}`, req.params.devoured, `${Object.keys(req.params)[0]}`, req.params.id, () => {
//         res.redirect('/');
//     }); 
// });
//Trash a burger thats been devoured
// router.delete('/delete/:id', (req, res) => {
//     burger.deleteOne(`${Object.keys(req.params)[0]}`, req.params.id, () => {
//         res.redirect('/');
//     });
// });

// Catch all redirects to root
router.all('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;