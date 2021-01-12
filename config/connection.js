//** Dependencies ***//
//===================//
var mysql = require('mysql');

//*** JawsDB MySQL Connection ***//
//===============================//
if (process.env.JAWSDB_URL) {
    pool = mysql.createConnection(process.env.JAWSDB_URL)
//*** MySQL Local Connection ***//
//===================================//
} else {
    pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_DB'
    });
}

module.exports = pool;