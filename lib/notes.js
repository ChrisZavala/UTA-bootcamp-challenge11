// here is all the work for the saving the notes
//Variable declaration: 
const fs = require('fs');
const path = require('path');

//our function to create our new note createNewnote();
function createNewnote(note, noteArray) {
    const newnote = note;
    noteArray.push(newnote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ noteArray }, null, 4)
    );
    return newnote;
}

//exporting my module for createNewnote, this should let me save the array. 
module.exports = { createNewnote };