//*** Dependencies ***//
//====================//
const path = require('path');
const { selectAll } = require('../config/orm');

//*** Directories ***//
//===================//
const CONFIG_DIR = path.resolve(__dirname, '../config');


//*** Modules ***//
//===============//
const orm = require(`${CONFIG_DIR}/orm`);

//Function to query all
orm.selectAll();
//Function to insert 
orm.insertOne();
//Function to update
orm.updateOne();


module.exports = {

};