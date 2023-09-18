const Router = require("express");
const router = Router();
const verificaToken = require("../verificaToken");
const bdCarrito = require("../models/carrito");

router.get("/api/carrito", verificaToken, async (req, res) => {
    const data = await bdCarrito.find();
    res.json(data);
});

router.post("/api/carrito", verificaToken, async (req, res) => {
    const user = req.tokenD;
    const cantidad = req.body.Productos.Cantidad;

    if (!cantidad) {
        return res.json({ Error: "No se ingreso una cantidad" });
    }

    let data = await bdCarrito.findOne({ id_user: user });
    if (!data) {
        return res.json({ Error: "No se encontro un carrito para este usuario" });
    }
    data.Productos.Cantidad = cantidad;

    await bdCarrito.updateOne({ id_user: user }, data);
    data = await bdCarrito.findOne({ id_user: user });
    res.status(200).json(data);
});

router.delete('/api/carrito', verificaToken, async(req, res) => {
    const user = req.tokenD;
    await bdCarrito.deleteOne({ id_user: user })
    res.json({Mensjae: "Carrito eliminado"})
});

module.exports = router;
