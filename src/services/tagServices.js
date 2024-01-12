const { 
    getTags,
    postTag,
    deleteTag
} = require('../dataAccess/tagDao');

const getTagsService = async() => {
    try {
        return await getTags();
    } catch (err) {
        throw new Error(err.message);
    };
};

const postTagService = async(name) => {
    try {
        return await postTag(name);
    } catch (err) {
        throw new Error(err.message);
    };
};

const deleteTagService = async(id) => {
    try {
        return await deleteTag(id);
    } catch (err) {
        throw new Error(err.message);
    };
};

module.exports = {
    getTagsService,
    postTagService,
    deleteTagService
}