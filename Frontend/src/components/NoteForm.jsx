import React, { useState } from "react";
import axios from "axios";

const NoteForm = ({ fetchNotes }) => {

const [title , setTitle] = useState("");
const [content , setContent] = useState("");

const createNote = async (e)=>{

e.preventDefault();

await axios.post(
"http://localhost:5000/api/notes",
{ title , content }
);

setTitle("");
setContent("");

fetchNotes();

};

return (

<div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">

<form onSubmit={createNote} className="flex flex-col gap-5">

{/* Title */}

<input
type="text"
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
className="p-3 rounded-lg bg-white/10 border border-white/20 
text-white placeholder:text-gray-300 outline-none"
/>

{/* Content */}

<textarea
placeholder="Content"
value={content}
onChange={(e)=>setContent(e.target.value)}
rows={5}
className="p-3 rounded-lg bg-white/10 border border-white/20 
text-white placeholder:text-gray-300 outline-none"
/>

<button
type="submit"
className="bg-cyan-500 text-white py-3 rounded-lg
cursor-pointer
hover:bg-cyan-600
hover:scale-105
transition-all duration-300"
>
Create Note
</button>

</form>

</div>

);

};

export default NoteForm;