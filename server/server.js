//require express to make a server
const express = require('express');
const devices = require('./modules/devices');
const animals = require('./modules/animals');
//our app
const app = express();
//tell the server to use "server/public" as the root of the website
app.use(express.static('server/public'));
//globals
const port =5000;
// tell our app to spin up and listen
app.listen(port, ()=>{
    console.log('server is up');
})
//route
app.get('/devices', (req,res)=>{
    console.log('/devices GET');
    res.send(devices);
})
app.get('/animals', (req,res)=>{
    console.log('/animals GET');
    res.send(animals);
})
