//*** Modules ***//
//===============//
const pool = require('./connection');

//MySQL Queries
module.exports = {
    selectAll: (tableInput, cb) => {
        pool.query(`SELECT * FROM ${tableInput}`, (err, result) => {
            if(err) throw err;
            cb(result)
        })
    },
    insertOne: () => {
      
    },
    updateOne: () => {
      
    }
}