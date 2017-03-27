'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saladSchema = new Schema({
  name:    { type: String },
  weight:  { type: Number },
  price:   { type: Number },
  details: [{ type: String }],
  image:   { type: String },
  href:    { type: String },
  vendor:  { type: String },
});

const saladModel = mongoose.model('salad', saladSchema);

module.exports = saladModel;
