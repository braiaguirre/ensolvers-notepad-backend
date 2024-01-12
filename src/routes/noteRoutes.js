const Router = require('express');

const {
    getNoteController,
    getNotesController,
    postNoteController,
    putNoteController,
    archiveRestoreNoteController,
    deleteNoteController,
    addTagNoteController
} = require('../controllers/noteController');

const noteRoutes = Router();

noteRoutes.get('/:id', getNoteController);
noteRoutes.get('/', getNotesController);
noteRoutes.post('/', postNoteController);
noteRoutes.post('/tag', addTagNoteController);
noteRoutes.put('/', putNoteController);
noteRoutes.delete('/archive/:id', archiveRestoreNoteController);
noteRoutes.delete('/:id', deleteNoteController);

module.exports = noteRoutes;