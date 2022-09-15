//importiamo la libreria express che serve per far funzionare il server
import express from "express";
import "express-async-errors";

//creiamo una istanza di express assegnando l'esecuzione ad "app"
const app = express();

//chiamiamo il server con una chiamata di tipo GET e spediamo una risposta 
app.get("/", (request, response) => {
    response.send("Server's up!");
});

export default app;