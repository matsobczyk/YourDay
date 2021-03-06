const Note = require('../models/Note');
const jwt = require('jsonwebtoken');
exports.getNotes = (async (req, res) => {
    try {
        const decoded = await jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);
        const notes = await Note.find({"author": decoded._id}).exec();
        res.json(notes);
    } catch (error) {
        res.json(error);
    }

});

exports.getNote = (async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteID);
        res.json(note);
    } catch (error) {
        res.json(error);
    }

});
exports.postNote = (async (req, res) => {
    const decoded = await jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);  
    const note = new Note ({
        author: decoded._id,
        text: req.body.text
    });
    try {
        const savedNote = await note.save();
        res.send(savedNote);
    }catch(err){
        res.status(400).send(err);
    } 
});
exports.patchNote = (async (req, res) => {
    const decoded = await jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);
    try{
        const updatedNote = await Note.updateOne(
            {$set: {author: decoded._id, text: req.body.text}}
            );
        res.json(updatedNote);
    }catch(err){
        res.json(err);
    }
});
exports.deleteNote = (async (req, res) => {
    try{
        console.log(req.params.noteID);
        const removedNote = await Note.deleteOne({id: req.params.noteID});
        
        res.json(removedNote);
    }catch(err){
        res.json(err);
    }
})

