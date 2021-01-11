//*** Dependencies ***//
//====================//
const path = require('path');

//*** Directories ***//
//===================//
const CONFIG_DIR = path.resolve(__dirname, '../config');

//*** Modules ***//
//===============//
const orm = require(`${CONFIG_DIR}/orm`);

module.exports = {
  all: (cb) => {
      orm.selectAll('burgers', (res) => cb(res));
  },
  insertOne: (cols, values, cb) => {
      orm.insertOne('burgers', cols, values, (res) => {cb(res)});
  }, 

  updateOne: () => {
      orm.updateOne();
  }
}

