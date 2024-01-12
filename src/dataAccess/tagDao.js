const { Tag } = require('../db');

const getTags = async () => {
    const tags = await Tag.findAll();
    return tags;
};

const postTag = async ( name ) => {
    const find = await Tag.findOne({ where: { name } });
    if (find) throw new Error ('Tag already exists.');
    const tag = await Tag.create({ name: name });
    return tag;
};

const deleteTag = async ( id ) => {
    const deleted = await Tag.destroy({ where: { id } });
    if (!deleted) throw new Error ('Tag not found.');
    return id;
};

module.exports = {
    getTags,
    postTag,
    deleteTag
};