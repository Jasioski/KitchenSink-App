const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PetSchema = new Schema({
  name: String,
  age: Number,
  type: String
})

const Pet = mongoose.model('Pet', PetSchema)
module.exports = Pet
