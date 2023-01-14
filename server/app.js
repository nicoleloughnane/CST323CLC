const express = require('express');
const app = express();

require('dotenv/config');
const api = process.env.API_URL;

//api
app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(`${api}/instruments`, ()=>{
    console.log('server is running on localhost:3000');
})