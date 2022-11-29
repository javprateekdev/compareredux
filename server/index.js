const express = require("express");
const con = require("./config");
const cors =require("cors");

const app = express();

app.use(cors());



app.get("/", (req, resp) => {
  con.query("select * from project", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});



app.listen("5000")
