require("dotenv").config()
const express = require("express");
const router = require("./router");
const { connect_db } = require("./config");
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 9000;

app.use(router);

connect_db().then(async (db) => {
    console.log('Database Connected')
    app.listen(port, () => console.log(`Server running on port ${port}`))
})

