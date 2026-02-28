const express = require("express");

const router = express.Router();

const {

createNote,

getNotes,

deleteNote,

exportNotes

}=require("../controllers/noteController");



router.post(

"/notes",

createNote

);

router.get(

"/notes",

getNotes

);

router.delete(

"/notes/:id",

deleteNote

);

router.get(

"/export",

exportNotes

);

module.exports = router;