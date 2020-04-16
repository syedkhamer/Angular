const express = require('express');
const { nextTick } = require('process');

const app= express();

app.use((req, res, next)=>{
    console.log("this express first middle ware");
    next();
});


app.use((req, res, next)=>{
    res.send("hi express");
    
});

module.exports =app;