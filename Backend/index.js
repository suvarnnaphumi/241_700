//ทำการ import โมดูล http
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า sever
const reqestListener = function(req,res){
    res.writeHead(200);
    res.end("Hello, World! This is my first sever.");
}

// run sever
const sever = http.createServer(reqestListener);
sever.listen(port,host,() =>{
    console.log(`Sever is running on http://${host}:${port}`);
})