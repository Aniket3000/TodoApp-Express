const express = require('express');
const Router = express.Router();
// const todos = 

const X = require("./home");

console.log("In ADDTODO -->", X);

Router.get('/', (req, res) => {
    X.todos.push(req.query.todoname);
    // item_count++;
    res.redirect('/home');
    // console.log(req.query)
});

module.exports = Router;