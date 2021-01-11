//*** Modules ***//
//===============//
const pool = require('./connection');

//MySQL Queries
module.exports = {
    selectAll: (table, cb) => {
        pool.query(`SELECT * FROM ${table}`, (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: (table, cols, values, cb) => {
      pool.query(`INSERT INTO ${table} (${cols}) VALUES (?)`, values, (err, result) => {
          if (err) throw err;
          cb(result);
      })
    },
    updateOne: (table, colNVal, con, cb) => {
        pool.query(`UPDATE ${table} SET ${colNVal} WHERE ${con};`, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: (table, con, cb) => {
      pool.query(`DELETE FROM ${table} WHERE ?`, con, (err, result) => {
          if(err) throw err;
          cb(result);
      });
    }
}