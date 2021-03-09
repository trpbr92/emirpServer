Node/Express Info
---

[] set up folders

root folder

server
server/public/
server/public/scripts
server/public/vendors
server/public/styles

[] init git
[] add .gitignore (in root folder add .DS_Store & node_modules)
[] add index to "server/public" folder
[] add client.js to "server/public/scripts
[] add jquery.js to "server/public/vendors
[] create server.js file in "server folder
[] npm install express (should have "node_modules" folder in root)
[] edit server.js (require express, set up express static)
[] npm init --y (this will initialize an npm project & will use default names)
[] update server.js:

```
//require express to make a server
const express = require('express');
//our app
const app = express();
//tell the server to use "server/public" as the root of the website
express.static('server/public');
// tell our app to spin up and listen
app.listen(5000, ()=>{
    console.log('server is up');
})
```