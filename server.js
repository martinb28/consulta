const express = require('express');
const Contenedor = require('./contenedor');

const app = express();
let lista = [] ;
let element = [] ;
const products = new Contenedor('productos.txt');

//Funciones
const getAll = async () => {
    let data = await products.getAll();    
     lista = [];
     for (let item of data) {        
        lista.push(item);        
    }
};

const getRandom = async () => { 
    let data = await products.getAll();
    let random = data[data.length - 1].id;
    let value = getRandomInt(random);
    let result = await products.getById(value);
    element = [];
    element.push(result);
};

function getRandomInt(max) {
    let value = Math.floor(Math.random() * max) + 1;
     return value;
    }


const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`error en servidor ${error}`));


//ruta productos
//Ruta a productos para obtener todos los productos
app.get('/productos', (req, res) => { 
    getAll();    
    res.send(lista);
});

//Ruta a productos ramdom para obntere 1 prodcuto de forma aleatoria
app.get('/productoRandom', (req, res) => {
    getRandom();
    res.send(element);
});