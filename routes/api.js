//Variables Declarations: 
const fs = require("fs");
const router = require('express').Router();
const notes = require('../db/db.json');
//had to install this: npm i uuid version 9.0.0
const { v4: uuidv4 } = require('uuid');

//Get Notes API: 
router.get('/notes', (req, res) => {
  console.log(`${req.method} request received`);

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Post router api
router.post('/notes', (req, res) => {
  //our deconstructor from class, but this time with only two variable passed through. 
  const { title, text } = req.body; 
  if (title && text) {
    const newNotes = {
      title,
      text,
      id: uuidv4()
    };
    const response = {
      status: 'Success', 
      body: newNotes
    };

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const newNotesData = JSON.parse(data);
        newNotesData.push(newNotes);

        fs.writeFile('./db/db.json', JSON.stringify(newNotesData, null, 4), (err) =>
          err ? console.log(err) : console.log('Your note has been added!'));
      }
    });
    res.status(201).json(response);

  } else {
    res.status(500).json('Something has happened trying to add your note!')
  }
});

//Bonus making the delete of the note with the red trash. 
router.delete('./notes/:id', (req, res) => {
  console.log(` ${req.method} note received for ${req.params.id}`);

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    const newNotesData = JSON.parse(data);
    for(let note of newNotesData){
      if(req.params.id == note.id) {
        let index = newNotesData.indexOf(note);
        newNotesData.splice(index, 1);

        fs.writeFile('./db/db.json', JSON.stringify(newNotesData, null, 4),
        (err) => err ? console.log(err) : console.log('New Note Added!'));
      }
    } 
  })
  res.json(notes);
});

//this exports the module. 
module.exports = router; 