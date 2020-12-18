const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require('./data')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/topRankings",async (req,res)=>{
    const offset=Number(req.query.offset || 0);
    const limit=Number(req.query.limit || 20);
    const dataToSend=data.slice(offset,limit+1);
    res.send(dataToSend);
});
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
