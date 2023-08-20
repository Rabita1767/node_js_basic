const http=require("http");
const server=http.createServer((req,res)=>
{
    res.end("Server is created");
})
server.listen(8000,"localhost");