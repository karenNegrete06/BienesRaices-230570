import express from 'express';

const router = express.Router();

//GET
router.get("/busquedaPorID/:id",(req,res)=>{
    router.send(`Se esta solicitando buscar alusuario con ID: ${request.id}`);
})
//2 C0MPONENTES DE UNAPETICION RUTA, FUNCION  CALLBACK
//POST
//PUT
//PATCH

