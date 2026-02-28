import React from "react";

const NoteList = ({notes , deleteNote})=>{

return(

<div>

<h2>All Notes</h2>

{

notes.map((note)=>{

return(

<div key={note._id}>

<h3>

{note.title}

</h3>

<p>

{note.content}

</p>

<button

onClick={()=>deleteNote(note._id)}

>

Delete

</button>

<hr/>

</div>

)

})

}

</div>

)

}

export default NoteList;