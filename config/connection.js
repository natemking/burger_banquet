//** Dependencies ***//
//===================//
var mysql = require('mysql');

//*** MySQL Pool Connection ***//
//=============================//
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_DB'
});

module.exports = pool;