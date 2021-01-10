//*** Dependencies ***//
//====================//
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//*** Express app ***//
//===================//
const app = express();
const PORT = process.env.PORT || 3000;

//*** Directories ***//
//===================//
const PUBLIC_DIR = path.resolve(__dirname, './public');
const CONT_DIR = path.resolve(__dirname, './controllers');
const controller = path.join(CONT_DIR, './controller')

//*** View Engine ***//
//====================//
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//*** Middleware ***//
//==================// 
app.use('/public', express.static(PUBLIC_DIR));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//*** Router ***//
//==============//
const router = require(controller);


app.use('/', router);





//*** Listener ***//
//================//
app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`);
});

