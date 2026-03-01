const Note = require("../models/Note");

const fs = require("fs");

const path = require("path");

const archiver = require("archiver");

const logActivity = require("../utils/logger");


// ================= CREATE NOTE =================

exports.createNote = async (req , res)=>{

try{

const {title , content} = req.body;

const note = await Note.create({

title,
content

});

logActivity(`NOTE_CREATED - ${title}`);

res.json(note);

}catch(error){

res.status(500).json(error);

}

};


// ================= GET NOTES =================

exports.getNotes = async(req , res)=>{

try{

const notes = await Note.find().sort({

createdAt:-1

});

res.json(notes);

}catch(error){

res.status(500).json(error);

}

};


// ================= UPDATE NOTE =================

exports.updateNote = async(req,res)=>{

try{

const {title , content} = req.body;

const note = await Note.findByIdAndUpdate(

req.params.id,

{title , content},

{new:true}

);

logActivity(`NOTE_UPDATED - ${title}`);

res.json(note);

}catch(error){

res.status(500).json(error);

}

};


// ================= DELETE SINGLE =================

exports.deleteNote = async(req,res)=>{

try{

const note = await Note.findByIdAndDelete(

req.params.id

);

logActivity(

`NOTE_DELETED - ${note?.title}`

);

res.json({

message:"Note Deleted"

});

}catch(error){

res.status(500).json(error);

}

};


// ================= DELETE ALL =================

exports.deleteAllNotes = async(req,res)=>{

try{

await Note.deleteMany({});

logActivity("ALL NOTES DELETED");

res.json({

message:"All Notes Deleted"

});

}catch(error){

res.status(500).json(error);

}

};



// ================= EXPORT ZIP =================

exports.exportNotes = async(req,res)=>{

try{

const notes = await Note.find();


// ZIP HEADER

res.setHeader(

"Content-Disposition",

'attachment; filename="notes.zip"'

);

res.setHeader(

"Content-Type",

"application/zip"

);


// CREATE ZIP

const archive = archiver("zip",{

zlib:{level:9}

});

archive.pipe(res);


// ADD TXT FILE

notes.forEach((note,index)=>{

const text=

`Title : ${note.title}

${note.content}

Created :

${note.createdAt?.toDateString()}
`;

archive.append(

text,

{

name:`note-${index+1}.txt`

}

);

});


// FINALIZE

archive.finalize();

}catch(error){

console.log(error);

res.status(500).json({

message:"Export Failed"

});

}

};