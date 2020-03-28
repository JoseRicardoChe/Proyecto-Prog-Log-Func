//PROGRAMACION FUNCIONAL
const router = require("express").Router();
const {
    Usexo,
    Ucarrera
} = require("../helpers/graficas");

router.get("/estadistica/graficas", async (req, res) => {
    const isc = await Ucarrera(req, res, "Sistemas");
    const civ = await Ucarrera(req, res, "Civil");
    const adm = await Ucarrera(req, res, "Administracion");
    const ind = await Ucarrera(req, res, "Industrial");
    const amb = await Ucarrera(req, res, "Ambiental");

    const mas = await Usexo(req, res, "Masculino");
    const fem = await Usexo(req, res, "Femenino");
    res.render("estadistica/graficas", {
        isc,
        civ,
        adm,
        ind,
        amb,
        mas,
        fem
    });
});

module.exports = router;