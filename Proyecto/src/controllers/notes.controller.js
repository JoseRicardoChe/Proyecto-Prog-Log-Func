const notesCtrl = {};

// Models
const Note = require("../models/Note");

// validacion de los campos obligatorios
notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "Porfavor escribe un titulo." });
  }
  if (!description) {
    errors.push({ text: "Porfavor escribe una descripcion" });
  }
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      title,
      description
    });
  } else {
    const newNote = new Note({ title, description });
    newNote.user = req.user.id;
    await newNote.save();
    req.flash("success_msg", "Evidencia Añadida Correctamente");
    res.redirect("/notes");
  }
};

//para poder ordenar las evidencias
notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id }).sort({ date: "desc" });
  res.render("notes/all-notes", { notes });
};

//para editar
notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user != req.user.id) {
    req.flash("error_msg", "No Autorizado");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};

//actualizar la Evidencia
notesCtrl.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Actualizacion exitosa");
  res.redirect("/notes");
};
//eliminacion de la nota con el id del usuario
notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Evidencia eliminada Correctamente");
  res.redirect("/notes");
};

//controlador de new-note
notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

module.exports = notesCtrl;
