//*** Modules ***//
//===============//
const pool = require('./connection');

//MySQL Queries
module.exports = {
    selectAll: (table, cb) => {
        const qStr = 'SELECT * from ??;';
        pool.query(qStr, table, (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: (table, col, val, cb) => {
        const qStr = 'INSERT INTO ?? (??) VALUES (?);';
        pool.query(qStr, [table, col, val], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: (table, col, val1, con, val2, cb) => {
        qStr = 'UPDATE ?? SET ?? = ? WHERE ?? = ?;';
        pool.query(qStr,[table, col, val1, con, val2], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: (table, con, val, cb) => {
        qStr = 'DELETE FROM ?? WHERE ?? = ?;';
        pool.query(qStr, [table, con, val], (err, result) => {
            if(err) throw err;
            cb(result);
        });
    }
}