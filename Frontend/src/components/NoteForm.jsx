import React, { useState } from "react";
import axios from "axios";

const NoteForm = ({fetchNotes})=>{

const [title,setTitle]=useState("");
const [content,setContent]=useState("");


// create note

const submitHandler = async(e)=>{

e.preventDefault();

await axios.post(
"http://localhost:5000/api/notes",
{
title,
content
}
)

setTitle("");
setContent("");

fetchNotes();

}


return(

<form onSubmit={submitHandler}>

<input
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<br/>

<textarea

placeholder="Content"

value={content}

onChange={(e)=>setContent(e.target.value)}

/>

<br/>

<button>

Create Note

</button>

</form>

)

}

export default NoteForm;