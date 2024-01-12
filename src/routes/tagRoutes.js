const Router = require('express');

const {
    getTagsController,
    postTagController,
    deleteTagController
} = require('../controllers/tagController');

const noteRoutes = Router();

noteRoutes.get('/', getTagsController);
noteRoutes.post('/', postTagController);
noteRoutes.delete('/:id', deleteTagController);

module.exports = noteRoutes;