
//-- This pulls in the package from the node_modules directory
//   This take care of the http, request, and response objects behind the scenes.
const express = require('express');
const app = express();
//--    helps us get the specific path to this file
const path = require('path');
//-- including static files like fonts, images and CSS with Express
//  app.use a function to increase functionality with express by adding a function to our application middleware stack.
//    `express.static` is a packaged shipped with express that helps us serve static files. any request for assets should get it from public directory.
app.use(express.static('public'))
app.listen(3000, () => {
    console.log("App listening on port 3000")
})

app.get('/', (req,res)=>{
    //--   path.resolve() -> helps us get the full absolute path which otherwise chnages based on different operating systems.
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'contact.html'))
})