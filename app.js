const express = require('express')

const app = express()


app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:__dirname});
})

app.get('/registration',(req,res)=>{
    res.sendFile('registration.html',{root:__dirname});
})

app.listen(3001,()=>{
    console.log("server is working");
})