const express = require('express')
const app=express()
const mongoose=require('mongoose')
// app.use('/posts',()=>{
//     console.log("Nguyen Huy TUan");
// })

// app.get('/',(req,res)=>{
//     res.send("we are on home");
// });
// app.get('/posts',(req,res)=>{
//     res.send("Hello Tuan");
// })

// app.listen(3000);

const url = "mongodb://localhost/mydb"

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log('connected...')
})