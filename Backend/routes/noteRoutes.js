const express = require("express");

const router = express.Router();


// CONTROLLERS

const {

createNote,
getNotes,
updateNote,
deleteNote,
deleteAllNotes,
exportNotes

} = require("../controllers/noteController");


// CREATE

router.post(

"/notes",

createNote

);


// GET

router.get(

"/notes",

getNotes

);


// UPDATE

router.put(

"/notes/:id",

updateNote

);


// DELETE SINGLE

router.delete(

"/notes/:id",

deleteNote

);


// DELETE ALL

router.delete(

"/notes",

deleteAllNotes

);


// EXPORT ZIP

router.get(

"/notes/export",

exportNotes

);


module.exports = router;