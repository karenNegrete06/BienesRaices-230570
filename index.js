import express from 'express'
//const express = require(`express`); //importar la libreria 
import generalRoutes from './Routes/generalRoutes.js'
const app = express()

//configuramos nuestro servidor web 
const port =3000;
app.listen(port,()=>{
    console.log(`La aplicacion ha iniciado en el puerto: ${port}`);
})

// Probamos las rutas para poder presentar mensajes  al usario a traves del navegador 
app.use('/',generalRoutes);