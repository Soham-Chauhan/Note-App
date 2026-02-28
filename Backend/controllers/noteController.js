const Note = require("../models/Note");

const fs = require("fs");

const path = require("path");

const logActivity = require("../utils/logger");


// create

exports.createNote = async(req,res)=>{

try{
console.log("DATA FROM FRONTEND :",req.body);
const {title,content}=req.body;

const note = await Note.create({

title,

content

});


// log

logActivity(

`NOTE_CREATED - Title: ${title}`

)

res.json(note);

}catch(err){

res.status(500).json(err);

}

}


// get

exports.getNotes = async(req,res)=>{

const notes = await Note.find();

res.json(notes);

}


// delete

exports.deleteNote = async(req,res)=>{

try{

const note = await Note.findByIdAndDelete(

req.params.id

);

logActivity(

`NOTE_DELETED - Title: ${note.title}`

)

res.json({

message:"deleted"

})

}catch(err){

res.status(500).json(err);

}

}


// export

exports.exportNotes = async(req,res)=>{

try{

const notes = await Note.find();

let text="";


notes.forEach((note)=>{

text+=`Title: ${note.title}\n`;

text+=`Content: ${note.content}\n`;

text+=`Created At: ${note.createdAt.toDateString()}\n`;

text+=`----------------------------\n`;

})

const filePath = path.join(

__dirname,

"../exports/notes.txt"

);


// create file

fs.writeFileSync(

filePath,

text

);


// headers

res.download(filePath);

}catch(err){

res.status(500).json(err);

}

}