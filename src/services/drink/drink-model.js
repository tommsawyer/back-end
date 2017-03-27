'use strict';

// drink-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name:    { type: String },
  weight:  { type: Number },
  price:   { type: Number },
  details: [{ type: String }],
  image:   { type: String },
  href:    { type: String },
  vendor:  { type: String },
});

const drinkModel = mongoose.model('drink', drinkSchema);

module.exports = drinkModel;
