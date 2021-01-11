//*** Modules ***//
//===============//
const pool = require('./connection');

//MySQL Queries
module.exports = {
    selectAll: (table, cb) => {
        pool.query(`SELECT * FROM ${table}`, (err, result) => {
            if(err) throw err;
            cb(result)
        })
    },
    insertOne: (table, cols, values, cb) => {
      pool.query(`INSERT INTO ${table} (${cols}) VALUES (?)`, values, (err, result) => {
          if (err) throw err;
          cb(result);
      })
    },
    updateOne: () => {
      
    }
}