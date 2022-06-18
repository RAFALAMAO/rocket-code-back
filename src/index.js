import express from "express";
import morgan from "morgan";
import routes from "./routes/routes.js";

// Server settings
const app = express();
const morganMidelware = morgan('dev');
app.set('port', process.env.PORT || 3000);

// ! AUN FALTARIA CONFIGURAR LOS DOMINIOS QUE TENDRAN ACCESO
// ! ES DECIR LA CONFIGURACIÓN CORS()
app.use(morganMidelware);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`Server listening on port: ${app.get('port')}`);
})
