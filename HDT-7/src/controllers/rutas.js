const { Router } = require("express");
const router = Router();
const DB_UMG = require("../BaseDeDatos");
const modeloUser = require("../models/user.js");
const jsonwebtoken = require("jsonwebtoken");

router.get("/proyecto/data", async (req, res) => {
    let tokenDesifrado
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            return res
                .status(401)
                .json({ Error: "Debe indicar un token de acceso" });
        }
        tokenDesifrado = jsonwebtoken.verify(token, "textosupersecreto");
        console.log('Token desifrado -->', tokenDesifrado);
    } catch (err) {
        console.log(err);
        return res.status(401).json({ Error: "Token incorrecto" });
    }
    const data = await modeloUser.findById(tokenDesifrado.id, { _id: 0, __v: 0 });
    if (!data) {
        return res.status(404).json({ Error: "Autenticacion fallida" });
    }
    res.status(200).json(data);
});

router.post("/proyecto/login/:DPI", async (req, res) => {
    const { usuario, clave } = req.body;
    const userLogueado = await modeloUser.findOne({
        usuario: usuario,
        clave: clave,
    });
    if (!userLogueado) {
        return res.status(404).json({ Error: "Credenciales invalidas" });
    }
    const token = jsonwebtoken.sign(
        { id: userLogueado._id },
        "textosupersecreto",
        {
            expiresIn: 60 * 60 * 24,
        }
    );
    res.status(200).json({ token });
});

router.post("/proyecto/register/", async (req, res) => {
    const { usuario, clave } = req.body;
    const user = new modeloUser({ usuario: usuario, clave: clave });
    const token = jsonwebtoken.sign({ id: user._id }, "textosupersecreto", {
        expiresIn: 60 * 60 * 24,
    });
    await user.save();
    res.json({ token });
});

module.exports = router;
