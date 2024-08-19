const express = require("express");
const host = "localhost";
const port = 3000;
const app = express();
require('dotenv').config();

const routes = require("./Routes/routers");

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes);


app.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
