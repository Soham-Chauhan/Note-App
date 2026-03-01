import axios from "axios";

const NoteList = ({notes , deleteNote , fetchNotes})=>{


// DOWNLOAD TXT

const downloadNote=(note)=>{

const text=`

Title : ${note.title}

${note.content}

`;

const blob=new Blob([text],{type:"text/plain"});

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download=`${note.title}.txt`;

a.click();

};


// UPDATE

const updateNote = async(note)=>{

const title=prompt("New Title",note.title);

const content=prompt("New Content",note.content);

if(!title || !content) return;

await axios.put(

`http://localhost:5000/api/notes/${note._id}`,

{title , content}

);

fetchNotes();

};



return(

<div className="grid md:grid-cols-2 gap-6 mt-8">

{notes.map((note)=>(

<div
key={note._id}
className="bg-white/10 p-6 rounded-xl border border-white/20"
>

<h2 className="text-cyan-400 font-bold text-xl">

{note.title}

</h2>

<p className="text-white mt-3">

{note.content}

</p>

<div className="flex gap-3 mt-5">

{/* DOWNLOAD */}

<button

onClick={()=>downloadNote(note)}

className="bg-green-500 px-4 py-2 rounded text-white
cursor-pointer
hover:bg-green-600
hover:scale-105
transition-all duration-300"

>

Download

</button>


{/* UPDATE */}

<button

onClick={()=>updateNote(note)}

className="bg-yellow-500 px-4 py-2 rounded
cursor-pointer
hover:bg-yellow-600
hover:scale-105
transition-all duration-300"

>

Update

</button>


{/* DELETE */}

<button

onClick={()=>deleteNote(note._id)}

className="bg-red-500 px-4 py-2 rounded text-white
cursor-pointer
hover:bg-red-600
hover:scale-105
transition-all duration-300"

>

Delete

</button>

</div>

</div>

))}

</div>

);

};

export default NoteList;