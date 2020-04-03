//PROGRAMACION FUNCIONAL
const router = require("express").Router();
const {
    Usexo,
    Ucarrera,
    Usemestre,
    Utotaluser,
    Eobjetos
} = require("../controllers/usuariosA.controller");

router.get("/estadistica/graficas", async (req, res) => {
    //total de usuarios
    const TotalUsers = await Utotaluser(req, res);
    const TotalEvidencias = await Eobjetos(req, res);

    //usuarios por carrera
    const isc = await Ucarrera(req, res, "Sistemas");
    const civ = await Ucarrera(req, res, "Civil");
    const adm = await Ucarrera(req, res, "Administracion");
    const ind = await Ucarrera(req, res, "Industrial");
    const amb = await Ucarrera(req, res, "Ambiental");

    //semestre por usuario
    const pri = await Usemestre(req, res, "Primero");
    const seg = await Usemestre(req, res, "Segundo");
    const ter = await Usemestre(req, res, "Tercero");
    const cua = await Usemestre(req, res, "Cuarto");
    const qui = await Usemestre(req, res, "Quinto");
    const sex = await Usemestre(req, res, "Sexto");
    const sep = await Usemestre(req, res, "Septimo");
    const oct = await Usemestre(req, res, "Octavo");
    const nov = await Usemestre(req, res, "Noveno");

    //usuarios Por
    const mas = await Usexo(req, res, "Masculino");
    const fem = await Usexo(req, res, "Femenino");

    res.render("estadistica/graficas", {
        TotalUsers,
        TotalEvidencias,
        isc,
        civ,
        adm,
        ind,
        amb,
        mas,
        fem,
        pri,
        seg,
        ter,
        cua,
        qui,
        sex,
        sep,
        oct,
        nov,
    });
});

module.exports = router;