import app from "./app";

//diamo al nostro server le informazioni riguardo quale porta "ascoltare". Di conseguenza
//capterà le varie modifiche al reload del server
const port = 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});