//Import dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a schema

var CatSchema = new Schema({
  name: String,
  age: Number,
  vaccinated: Boolean
});


//Export
module.exports = mongoose.model('Cats', CatSchema);
