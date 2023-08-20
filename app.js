const fetch=require("./product");
fetch.getAll();
fetch.updateById(4,
    {
        name:"ABC",
        stock:0
    }
    )
fetch.deleteById(1);
fetch.createNewId(
    {
        "name": "Buroto, Vol. 1",
        "price": 10.99,
        "stock": 20,
        "author": "Masashi Kishimoto"
    }
)
fetch.newId([
    {
        "name": "Buroto, Vol. 2",
        "price": 8.99,
        "stock": 12,
        "author": "Masashi Kishimoto"
    },
    {
        "name": "Buroto, Vol. 3",
        "price": 11.99,
        "stock": 25,
        "author": "Masashi Kishimoto"
    }

])