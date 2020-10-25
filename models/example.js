const mongoose = require('mongoose')

const { Schema } = mongoose

const exampleModel = new Schema({
	nombre: { type: String, required: true }, 
	email: { type: String, required: true }, 
	password: { type: String, required: true } 
})


module.exports = mongoose.model('example', exampleModel)