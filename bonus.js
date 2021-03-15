const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request

        var arrelements=["good","fortune","jokes","naughty","smart","innocent"];
var minval=0;

var maxval=arr.length;
var value=Math.floor(Math.random()*(maxval-minval)+minval)
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML
      res.write('<html> <head> <title> webpage for bonus  </title> </head>')
      res.write('<body>')
      res.write('<h1bonus with random number usage</h1><br>')  
      res.write(`<p>${arrelements[value]}</p>`)
      res.end('</body></html>') 
    }                           
)
server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})