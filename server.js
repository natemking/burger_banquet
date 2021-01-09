//*** Dependencies ***//
//====================//
const express = require('express');
const path = require('path');

//*** Directories ***//
//===================//
const CONFIG_DIR = path.resolve(__dirname, './config');


//*** Modules ***//
//===============//
const orm = require(`${CONFIG_DIR}/orm`);
