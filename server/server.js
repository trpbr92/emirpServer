//require express to make a server
const express = require('express');
//our app
const app = express();
//tell the server to use "server/public" as the root of the website
app.use(express.static('server/public'));
//globals
const port =5000;
let devices = ['android phone', 'fire tablet']
// tell our app to spin up and listen
app.listen(port, ()=>{
    console.log('server is up');
})
//our first GET route
app.get('/devices', (req,res)=>{
    console.log('/devices GET');
    res.send(devices);
})

