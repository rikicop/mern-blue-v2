const express = require("express");
const notes = require("./data/notes");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

/* The req.params Objeto que contiene valores de parámetros analizados a partir de la ruta de URL. */
/* El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. */
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port  ${PORT}`));
