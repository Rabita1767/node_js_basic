const http=require("http");
const fs=require("fs");
const { json } = require("stream/consumers");
const server=http.createServer((req,res)=>
{
    let body="";
    req.on("data",(buffer)=>
    {
        body+=buffer;
    })
    req.on("end",()=>
    {
        try {
            if(req.url==="/products/all" && req.method==="POST")
            {
                fs.readFile("./data/manga.json",(err,data)=>
                {
                    try {
                        const jsonData=JSON.parse(data);
                        const newData=JSON.parse(body);
                        if(!newData.id)
                        {
                            res.writeHead(500,{"Content-Type":"application/json"});
                            res.write(JSON.stringify({error:"ID field is missing!"}));
                            res.end();
                        }
                        else{
                            jsonData.push(newData);
                            fs.writeFile("./data/manga.json",JSON.stringify(jsonData),(error)=>
                            {
                                if(!error)
                                {
                                    res.writeHead(200,{"Content-Type":"application/json"});
                                    res.write(JSON.stringify({message:"Data added successfully"},newData));
                                    res.end();
                                }
                            })
                        }
                        
                        
                    } catch (error) {
                        res.writeHead(500,{"Content-Type":"application/json"});
                        res.write(JSON.stringify({ error: "Manga data not found" }));
                        res.end();
                    }
                })
            }
            else
            {
                res.writeHead(400,{"Content-Type":"application/json"});
                res.write(JSON.stringify({message:"Wrong URL!"}));
                res.end();
            }
            
          } catch (error) {
                res.writeHead(500,{"Content-Type":"application/json"});
                res.write(error);
                res.end();
          }
        })
    })
  

server.listen(8000,()=>
{
    
    console.log("Server is running");
})