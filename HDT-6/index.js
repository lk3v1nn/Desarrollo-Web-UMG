const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/DB_UMG", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

const connection = mongoose.connection;
//evento cuando se conecta a la base de datos
connection.on("open", () => {
  console.log("Conectado a la base de datos");
});
//evento cuando hay un error en la coneccion a la base de datos
connection.on("err", (err) => {
  console.log("Error en la coneccion a la base de datos: ", err);
});

//modelo de la base de datos
const DB_UMG = mongoose.model("carros", {
    "VIN (1-10)": String,
    "County": String,
    "City": String,
    "State": String,
    "Postal Code": Number,
    "Model Year": Number,
    "Make": String,
    "Model": String,
    "Electric Vehicle Type": String,
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility": String,
    "Electric Range": Number,
    "Base MSRP": Number,
    "Legislative District": Number,
    "DOL Vehicle ID": Number,
    "Vehicle Location": String,
    "Electric Utility": String,
    "2020 Census Tract": Number
});

app.get("/verTodo", async (req, res) => {
  const data = await DB_UMG.find();
  res.json(data);
  console.log("Datos consultados");
});

app.post('/crear', async (req, res) => {
    await DB_UMG.insertMany(req.body);
    res.json({ message: 'Dato creado exitosamente'});
});

app.put("/actualizar/:VIN", async (req, res) => {
  await DB_UMG.updateOne({ "VIN (1-10)": req.params.VIN }, { $set: req.body });
  res.json({ message: "Dato actualizado exitosamente" });
});

app.delete("/borrar/:VIN", async (req, res) => {
  await DB_UMG.deleteOne({ "VIN (1-10)": req.params.VIN });
  res.json({ message: "Dato eliminado exitosamente" });
});

app.listen("3000", () => {
  console.log("Servidor iniciado en puerto 3000");
});
