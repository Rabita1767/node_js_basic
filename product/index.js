const fs= require("fs");
class fetchData
{
    getAll()
    {
        const data=fs.readFileSync("./data/manga.json","utf-8");
        const jsonData=JSON.parse(data);
        console.log(jsonData);
    }
    updateById(id,properties)
    {
        const data=fs.readFileSync("./data/manga.json","utf-8");
        const jsonData=JSON.parse(data);
        const filterJson=jsonData.filter((x)=>x.id!=id)
        if(filterJson.length==jsonData.length)
        {
            console.log("Not found!");
        }
        else
        {
            const index=jsonData.findIndex((x)=>x.id==id)
            jsonData[index]={...jsonData[index],...properties};
            console.log(jsonData[index]);
        }
    
        
    }

    deleteById(id)
    {
        const data=fs.readFileSync("./data/manga.json","utf-8");
        const jsonData=JSON.parse(data);
        const filterJson=jsonData.filter((x)=>x.id!=id)
        if(filterJson.length==jsonData.length)
        {
            console.log("Id not found");
        }
        else
        {
            const index=jsonData.findIndex((x)=>x.id==id)
            jsonData.splice(index,1);
            fs.writeFileSync("./data/manga.json",JSON.stringify(jsonData))
            console.log(jsonData);
        }
    }
    createNewId(properties)
    {
        const data=fs.readFileSync("./data/manga.json","utf-8");
        const jsonData=JSON.parse(data);
        const res={...properties,id:jsonData[jsonData.length-1].id+1};
        jsonData.push(res);
        fs.writeFileSync("./data/manga.json",JSON.stringify(jsonData));
        console.log(jsonData);
    }
    newId(array)
    {
        const data=fs.readFileSync("./data/manga.json","utf-8");
        const jsonData=JSON.parse(data);
        let i;
        for(i=0;i<array.length;i++)
        {
            let lastId=jsonData[jsonData.length-1].id;
            const res={...array[i],id:lastId+1};
            jsonData.push(res);
            fs.writeFileSync("./data/manga.json",JSON.stringify(jsonData));
            lastId++;
        }
        console.log(jsonData);

    }

}

module.exports=new fetchData();
