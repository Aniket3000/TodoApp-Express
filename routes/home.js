var express = require('express');
var router = express.Router();

let todos = [];
let item_count = 0;

router.get('/a', (req, res) => {
    let printtodos = "";
    // let id = 0;
    for (let i = 0; i < todos.length; i++) {
        // let id = i.toString();
        // id += "_todo";
        printtodos += `<input type="checkbox" id=${todos[i]} name="${todos[i]}">`
        printtodos += `<label for=${todos[i]}>` + todos[i] + "</label><br>"
    }
    let html = `
    <html>
    <head>
        <title>Todo App</title>
    </head>
    <body>
        <h1 align="center">Todo App</h1>
        <br>
        <h3 align="center">No of todos: ${item_count}</h3>
        <form align="center" name="myForm" action='/addtodo' method = "GET">
                    Todo: <input type="text" name="todoname" required>
            <input type="submit" value="ADD">
            <br><br>
        </form>
        <form align="center" name="deleteform" action="/deletetodo">
                                    ${printtodos}
            <br>
            <input type="submit" value="Delete">
        </form>
    </body>
    `
    res.send(html);
});

// export this router to use in our index.js
module.exports = {router,todos};