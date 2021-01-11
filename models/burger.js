//*** Dependencies ***//
//====================//
const path = require('path');

//*** Directories ***//
//===================//
const CONFIG_DIR = path.resolve(__dirname, '../config');

//*** Modules ***//
//===============//
const orm = require(`${CONFIG_DIR}/orm`);
//DB Table
const table = 'burgers';

module.exports = {
    all: (cb) => {
        orm.selectAll(table, (res) => cb(res));
    },
    insertOne: (cols, values, cb) => {
        orm.insertOne(table, cols, values, (res) => cb(res));
    }, 
    updateOne: (colNVal, con, cb) => {
        orm.updateOne(table, colNVal, con, (res) => cb(res));
    },
    deleteOne: (con, cb) => {
        orm.deleteOne(table, con, (res) => cb(res));
    }
}

