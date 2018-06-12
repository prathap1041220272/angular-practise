'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 3000;
const {user} = require('./models')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/signup',(req,res,next)=>{
	// console.log(req.body)
	// const {name , message} = req.body;
 	const User = new user(req.body);
 	User.save()
 	.then(data =>{
 		res.json(data)
 	})
 	.catch(err => {
 		res.json(err)
 	})
 })

app.get('/data',(req,res,next)=>{
	user.find()
	.then(data=>{
		res.json(data)
	})
	.catch(err =>{
		res.json(err)
	})
})

// app.use('./routes/user');

app.listen(port,()=>{
	console.log(`server started at port ${port}`);
})