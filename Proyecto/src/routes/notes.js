//programacion Funcional
const express = require("express");
const router = express.Router();

// Controller controla los las nuevas notas y las actualizaciones 
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require("../controllers/notes.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// Nuevas Evidencias
router.get("/notes/add", isAuthenticated, renderNoteForm);

//Nueva evidencia
router.post("/notes/new-note", isAuthenticated, createNewNote);

// Obtener Nuevas Evidencias
router.get("/notes", isAuthenticated, renderNotes);

// Editar las Evidencias
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// Eliminar Evidencias
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);


module.exports = router;
