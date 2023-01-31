//Variables Declarations: 
const router = require('express').Router();
const { createNewnote } = require('../../lib/notes');
let { noteArray } = require('../../db/db.json');

//the note is at api/notes being a JSON
router.get('/notes', (req, res) => {
    let data = noteArray;
    res.json(data);
});

router.post('/notes', (req, res) => {
    if(noteArray){
        //for the next index of the array. 
        req.body.id = noteArray.length.toString();
    }else 
        {req.body.id = 0}
        res.json(createNewnote(req.body, noteArray));
});
//this exports the module. 
module.exports = router; 