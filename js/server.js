
//-- This pulls in the package from the node_modules directory
//   This take care of the http, request, and response objects behind the scenes.
const express = require('express');
const app = express();
app.listen(3000, () => {

})

//--    helps us get the specific path to this file
const path = require('path');

app.get()

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