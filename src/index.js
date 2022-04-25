
const express = require('express');
const connect = require('./configs/db');

const app = express();
const port = 8000;

const user = require('./controllers/user.controller');
const branchDetail = require("./controllers/branchDetail.controller");
const masterAccount = require("./controllers/masterAccount.controller");
const savingsAccount = require("./controllers/savingsAccount.controller");
const fixedAccount = require("./controllers/fixedAccount.controller");



app.use(express.json());

app.use("/user", user);
app.use("/branchDetail", branchDetail);
app.use("/masterAccount", masterAccount);
app.use("/savingsAccount", savingsAccount);
app.use("/fixedAccount", fixedAccount);


app.listen(port, async()=>{
    try {
        await connect();
        console.log(`running on ${port}`)
    } catch (error) {
        console.log(error.message);
    }
})