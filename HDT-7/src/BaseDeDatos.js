const mongoose = require("mongoose");
const models = require('./models/user');

mongoose
  .connect(
    "mongodb+srv://lk3v1nn:dE658bz9Pr88GPgS@cluster0.i5qgmef.mongodb.net/DB_UMG"
  )
  .catch((err) => {
    console.log(err);
  });

const connection = mongoose.connection;

//Evento de cuando se conecta a la BD
connection.on("open", () => {
  console.log("Conectado a la Base de datos");
});

connection.on("err", (err) => {
  console.log("Error DB: ", err);
});

// const DB_UMG = mongoose.model("users", { usuario: String, clave: String });
const DB_UMG = models;

module.exports = DB_UMG;
