import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

const Home = () => {

const [notes , setNotes] = useState([]);


// get all notes
const fetchNotes = async ()=>{

const res = await axios.get(
"http://localhost:5000/api/notes"
);

setNotes(res.data);

}


// first load pe chale
useEffect(()=>{

fetchNotes();

},[])


// delete

const deleteNote = async(id)=>{

await axios.delete(
`http://localhost:5000/api/notes/${id}`
);

fetchNotes();

}


// export

const exportNotes = ()=>{

window.open(
"http://localhost:5000/api/export"
)

}


return(

<div>

<NoteForm fetchNotes={fetchNotes}/>

<button onClick={exportNotes}>

Export Notes

</button>


<NoteList
notes={notes}
deleteNote={deleteNote}
/>

</div>

)

}

export default Home;