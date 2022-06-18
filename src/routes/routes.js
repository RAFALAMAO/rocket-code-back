import { Router } from "express";
import db from "../database.js";

const routes = Router();

routes.get('/', async(req, res, next) =>{
    let text = `
        <h1>Bienvenido!</h1>
        <p>Si quieres ver los usuarios de la tabla <strong>users_test_Aaron_Juarez_Terrazas</strong>, entra a la ruta <strong>/users</strong></p>
        <p>Si quieres agegar a un usuario, debes realizar una petición <strong>PUT</strong> a <strong>/user</strong> con la siguiente estructura:</p>
        <p>{
            "nombre": string,
            "segundo_nombre": string,
            "apellido_paterno": string,
            "apellido_materno": string,
            "fecha_nacimiento": date,
            "email": string,
            "telefono": string
        }</p>
    `;
    res.send(text);
})

// =================== READ
routes.get('/users', async(req, res, next) =>{
    const query = `SELECT * FROM users_test_Aaron_Juarez_Terrazas`;
    try {
        const [rows, _] = await db.query(query);
        res.json({message: 'Tabla de usuarios', rows});
    } catch (error) {
        res.json({message: error});
    }
})

// =================== CREATE
routes.put('/user', async(req, res, next) =>{
    const newUser = [
        req.body.nombre,
        req.body.segundo_nombre,
        req.body.apellido_paterno,
        req.body.apellido_materno,
        req.body.fecha_nacimiento,
        req.body.email,
        req.body.telefono
    ];

    const query = `INSERT INTO users_test_Aaron_Juarez_Terrazas
    (nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, email, telefono)
    VALUES
    (?)`;

    try {
        await db.query(query, [newUser]);
        res.json({message: 'Usuario agregado con exito!', newUser});
    } catch (error) {
        res.json({message: error});
    }
})

export default routes;