//variable Declaration: 
const path = require('path');
const router = require('express').Router();


//All the gets for /,*, /notes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/notes.html'));
});
//my wild card
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
});
//exporting my router
module.exports = router;