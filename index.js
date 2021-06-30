const express = require('express');
const path = require('path');
// Create a web app
const app = express();
app.listen(6001);

let {router,todos} = require('./routes/home.js');
let Router = require('./routes/addtodo.js');
// let deletetodo = require('./routes/deletetodo.js');
// app.use(express.static(path.join(__dirname,'routes')));

// console.log(home);
// app.use("/deletetodo", deletetodo);

app.use("/home", router);
app.use("/addtodo", Router);

// module.exports = app;