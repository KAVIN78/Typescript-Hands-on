let Products = [
       {
        "productname1": "Iphone",
        "price":50000
    },
{
    "productname2":"air cooler",
    "price":10000
},
{
    "productname3":"washing machine",
    "price":12000
},
{
    "productname4":"fridge",
    "price":26000
},]
Products.sort((a, b) => a.price - b.price);
console.log(Products);

