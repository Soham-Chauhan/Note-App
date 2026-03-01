const Navbar=({

exportAll,

deleteAll

})=>{

return(

<div className="bg-slate-900 border-b border-slate-700">

<div className="max-w-6xl mx-auto flex justify-between p-4">

<h1

className="text-2xl font-bold text-cyan-400">

Notes Manager

</h1>

<div className="space-x-3">

<button

onClick={exportAll}

className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">

Export ZIP

</button>

<button

onClick={deleteAll}

className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">

Delete All

</button>

</div>

</div>

</div>

)

}

export default Navbar;