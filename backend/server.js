const express = require("express");
const notes = require("./data/notes");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

/* The req.params Objeto que contiene valores de parámetros analizados a partir de la ruta de URL. */
/* El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. */
/* app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
}); */

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port  ${PORT}`));
