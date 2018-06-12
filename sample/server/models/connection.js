'use strict'
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample')

.then((data)=>{
	console.log('connected to db')
})

.catch((error)=>{
	console.log(err.message)
})


module.exports = mongoose;