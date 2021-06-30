const express = require('express');
const Router =  express.Router();

const todos = ["JELLE","sdfsdf","ewrwe"];


Router.get('/',(req,res)=>{
    res.send("HEllooo");
})

module.exports = {Router,todos};