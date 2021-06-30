const express = require('express');
// const Router = express.Router();

const app = express();
app.listen(3001);


const {Router,todos} = require('./exammmm.js');

app.use('/',Router);

console.log(todos);