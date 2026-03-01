import React , {useEffect , useState} from "react";
import axios from "axios";

import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

const Home = ()=>{

const [notes , setNotes] = useState([]);


// FETCH NOTES

const fetchNotes = async()=>{

const res = await axios.get(
"http://localhost:5000/api/notes"
);

setNotes(res.data);

};


// FIRST LOAD

useEffect(()=>{

fetchNotes();

},[]);


// DELETE SINGLE NOTE

const deleteNote = async(id)=>{

await axios.delete(

`http://localhost:5000/api/notes/${id}`

);

fetchNotes();

};


// DELETE ALL

const deleteAll = async()=>{

await axios.delete(

"http://localhost:5000/api/notes"

);

fetchNotes();

};


// EXPORT ALL ZIP

const exportZip = async()=>{

window.open(

"http://localhost:5000/api/notes/export"

);

};


return(

<div className="min-h-screen bg-slate-950 p-10">

{/* TOP BAR */}

<div className="flex justify-between items-center mb-6">

<h1 className="text-3xl text-cyan-400 font-bold">

Notes Manager

</h1>

<div className="flex gap-4">

<button

onClick={exportZip}

className="bg-green-500 px-5 py-2 rounded text-white
cursor-pointer
hover:bg-green-600
hover:scale-105
transition-all duration-300"

>

Export ZIP

</button>

<button

onClick={deleteAll}

className="bg-green-500 px-5 py-2 rounded text-white
cursor-pointer
hover:bg-green-600
hover:scale-105
transition-all duration-300"
>

Delete All

</button>

</div>

</div>


{/* FORM */}

<NoteForm fetchNotes={fetchNotes}/>


{/* LIST */}

<NoteList

notes={notes}

deleteNote={deleteNote}
fetchNotes={fetchNotes}

/>

</div>

);

};

export default Home;