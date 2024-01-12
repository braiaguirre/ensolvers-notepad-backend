const { 
    getNoteService,
    getNotesService,
    postNoteService,
    putNoteService,
    archiveRestoreNoteService,
    deleteNoteService,
    addTagNoteService
} = require('../services/noteServices')

const getNoteController = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await getNoteService(id);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    };
};

const getNotesController = async ( req, res) => {
    try {
        const { archived, filter } = req.query;
        const response = await getNotesService(JSON.parse(archived), filter);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    };
};

const postNoteController = async ( req, res) => {
    try {
        const { content } = req.body;
        const response = await postNoteService(content);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    };
};

const putNoteController = async ( req, res ) => {
    try {
        const { id, title, content } = req.body;
        const response = await putNoteService(id, title, content);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    };
};

const archiveRestoreNoteController = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await archiveRestoreNoteService(id);
        res.status(200).json(response);

    } catch (err) {
        res.status(404).json(err.message);
    };
};

const deleteNoteController = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await deleteNoteService(id);
        res.status(200).json(response);

    } catch (err) {
        res.status(404).json(err.message);
    };
};

const addTagNoteController = async ( req, res ) => {
    try {
        const { id, tags, archived } = req.body;
        const response = await addTagNoteService(id, tags, archived);
        res.status(200).json(response);

    } catch (err) {
        res.status(404).json(err.message);
    };
};

module.exports= {
    getNoteController,
    getNotesController,
    postNoteController,
    putNoteController,
    archiveRestoreNoteController,
    deleteNoteController,
    addTagNoteController
};