//*** Dependencies ***//
//====================//
const path = require('path');

//*** Directories ***//
//===================//
const CONFIG_DIR = path.resolve(__dirname, '../config');

//*** Modules ***//
//===============//
const paths = require('../server');

const orm = require(`${CONFIG_DIR}/orm`);

//DB Table
const table = 'burgers';

module.exports = {
    all: (cb) => {
        orm.selectAll(table, (res) => cb(res));
    },
    insertOne: (col, val, cb) => {
        orm.insertOne(table, col, val, (res) => cb(res));
    }, 
    updateOne: (col, val1, con, val2, cb) => {
        orm.updateOne(table, col, val1, con, val2, (res) => cb(res));
    },
    deleteOne: (con, val, cb) => {
        orm.deleteOne(table, con, val, (res) => cb(res));
    }
}

// console.log(require(`${paths.CONFIG_DIR}/orm`));
console.log(orm);