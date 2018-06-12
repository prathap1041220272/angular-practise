'use strict'
//importing the express
const express = require('express');
const app = express();

//port number
const port = process.env.PORT || 4568;




app.listen(port,()=>{
	console.log(`server started at port ${port}`)
})