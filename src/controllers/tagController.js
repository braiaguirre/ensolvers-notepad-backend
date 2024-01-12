const { 
    getTagsService,
    postTagService,
    deleteTagService
} = require('../services/tagServices')

const getTagsController = async ( req, res ) => {
    try {
        const response = await getTagsService();
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    };
};

const postTagController = async ( req, res ) => {
    try {
        const { name } = req.body;
        const response = await postTagService(name);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    };
};

const deleteTagController = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await deleteTagService(id);
        res.status(200).json(response);

    } catch (err) {
        res.status(404).json(err.message);
    };
};

module.exports= {
    getTagsController,
    postTagController,
    deleteTagController
};