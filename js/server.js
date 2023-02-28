
//-- require function helps us grab the package in Node
//   similar to import or include
//   The `http` is a built-in package that performs actions on the server
const http = require('http');

//-- Create and start a server with the `createServer` from the `http` package
//    req - request from browser
//    res - response to give back to browser
const server = http.createServer((req, res) => {
    //-- Responds differently based on different URLs
    if (req.url === '/about'){
        res.end("The About Page")
    }else if (req.url === '/contact'){
        res.end("The Contact Page")
    }else if (req.url === '/'){
        res.end('The Home Page')
    }else {
        //-- `writeHead` writes the status code of the request
        res.writeHead(404);
        res.end('page not found')
    }
})


//-- The start of our server to start taking requests
// -- The port is 3000 for request
//     A port is a specific gateway on the server to host a particular app.
server.listen(3000)









