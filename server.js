const express = require('express');
const Contenedor = require('./contenedor');

const app = express();



async function main() {
    

    //select all    
    //const product = new Contenedor('./productos.txt');
    //let allProducts = await product.getAll();    
    //console.log(allProducts);
    //return JSON.stringify(allProducts);
    
    
    //random
    const product = new Contenedor('./productos.txt');
    let allProducts = await product.getAll();
    let random = Math.floor(Math.random() * 3);
    console.log(allProducts[random]);
    return allProducts[random];
}




app.get('/', (req, res) => {
    //res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1> ');
    res.send(main())
})

app.get('/productos', (req, res) => {    
    res.send(JSON.stringify(product.getAll()));
})

app.get('/productoRandom', (req, res) => {
    res.send(main());
})


const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`error en servidor ${error}`));