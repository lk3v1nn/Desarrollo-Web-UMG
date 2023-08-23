const express = require("express");

const app = express.Router();

let ciudadanos = [];

//2
app.post("/api/registro/ciudadanos", (req, res) => {
   const ciudadano = req.body;
   if (ciudadanos.length === 0) {
      ciudadanos.push(ciudadano);
      res.send(ciudadanos);
   } else {
      if (CiudadanoExiste(ciudadanos, ciudadano.dpi)) {
         res.send({ Error: "Ciudadano ya existe" });
      } else {
         ciudadanos.push(ciudadano);
         res.send(ciudadanos);
      }
   }
});

//3
app.put("/api/registro/ciudadanos/:dpi", (req, res) => {
   const dpi = parseInt(req.params.dpi);
   if (CiudadanoExiste(ciudadanos, dpi)) {
      ciudadanos = ciudadanos.map((c) =>
         dpi == c.dpi ? { ...c, ...req.body } : c
      );
      res.send(ciudadanos);
   } else {
      res.send({ Error: "El ciudadano no existe" });
   }
});

//4
app.delete("/api/registro/ciudadanos/:dpi", (req, res) => {
   if (CiudadanoExiste(ciudadanos, parseInt(req.params.dpi))) {
      ciudadanos = ciudadanos.filter((c) => c.dpi != req.params.dpi);
      res.send(ciudadanos);
   } else {
      res.send({ Error: "El ciudadano no existe" });
   }
});

//5
app.get("/api/registro/ciudadanos/:dpi", (req, res) => {
   if (CiudadanoExiste(ciudadanos, req.params.dpi)) {
      res.send(ciudadanos.find((c) => req.params.dpi == c.dpi));
   } else {
      res.send({ Error: "El ciudadano no existe" });
   }
});

//6
app.get("/api/registro/ciudadanos/", (req, res) => {
   res.send(ciudadanos);
});

function CiudadanoExiste(ciudadanos, dpi) {
   let CiudadanoExiste = ciudadanos.find((c) => c.dpi == dpi);
   if (!CiudadanoExiste) {
      return false;
   } else {
      return true;
   }
}

module.exports = app;
