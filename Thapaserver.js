const express = require('express');
const app = express();
const users=require("./mock.json");
const PORT = process.env.PORT || 5000;

app.get("/users", (req, res) => {
    return res.json(users);
});

app.listen(PORT,()=>console.log(`server started`));