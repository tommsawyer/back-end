'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goodSchema = new Schema({
  name:    { type: String },
  weight:  { type: Number },
  price:   { type: Number },
  details: [{ type: String }],
  image:   { type: String },
  href:    { type: String },
  vendor:  { type: String }
});

const goodModel = mongoose.model('good', goodSchema);

module.exports = goodModel;
