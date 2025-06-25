const http = require('http');
const port = 8080;
const fs = require('fs');
const server = http.createServer((req , res)=>{
    console.log(req.url);
    res.writeHead(200,{
        "content-Type":'text/html'
    });

    fs.readFile('./index.html',(err,data)=>{
        if(err) {
            return console.log(err);
        }
        res.end(data);
    });
  //  res.end('<h1>hello , here is your req data</h1>');
});


server.listen(port , (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('server started at ' , port);
});

