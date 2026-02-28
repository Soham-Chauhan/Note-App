const fs = require("fs");
const path = require("path");

const logActivity =(message)=>{

const logPath = path.join(

__dirname,

"../logs/activity.log"

);


// timestamp

const now = new Date();

const timestamp =

now.getFullYear()+"-"+

String(now.getMonth()+1).padStart(2,"0")+"-"+

String(now.getDate()).padStart(2,"0")+" "+

String(now.getHours()).padStart(2,"0")+":"+

String(now.getMinutes()).padStart(2,"0")+":"+

String(now.getSeconds()).padStart(2,"0");


const log = `[${timestamp}] ${message}\n`;


fs.appendFile(

logPath,

log,

(err)=>{

if(err){

console.log("Log error",err);

}

}

)

}

module.exports = logActivity;