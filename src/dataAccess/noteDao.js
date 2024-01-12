const { Note, Tag } = require('../db');
const { Op } = require('sequelize');
const queryBuilder = require('../utils/queryBuilder');

const getNote = async ( id ) => {
    const note = await Note.findOne({ where: { id }, paranoid: false });
    if (!note) throw new Error ('Note not found.');
    return note;
};

const getNotes = async ( archived, filter ) => {
    const query = queryBuilder( archived, filter, Op, Tag );
    const notes = await Note.findAll(query);
    if (!notes) throw new Error ('No notes found.');
    return notes;
};

const postNote = async ( content ) => {
    const note = await Note.create({ content: content });
    if (!note) throw new Error ('An error ocurred.');
    return note;
};

const putNote = async ( id, title, content ) => {
    console.log(title);
    const note = await Note.findOne({ where: { id }, paranoid: false });
    if (!note) throw new Error ('Note not found.');
    note.title = title;
    note.content = content;
    await note.save();
    return note;
};

const archiveRestoreNote = async ( id, force ) => {
    const note = await Note.findOne({ where: { id } });
    if (!note) {
        const restored = await Note.restore({ where: { id } });
        if (!restored) throw new Error ('An error ocurred.');
        return id;
    } else {
        const archived = await Note.destroy({ where: { id }, force });
        if (!archived) throw new Error ('An error ocurred.');
        return id;
    }
};

const deleteNote = async ( id ) => {
    const deleted = await Note.destroy({ where: { id }, force: true });
    if (!deleted) throw new Error ('An error ocurred.');
    return id;
};

const addTagNote = async ( id, tags, archived ) => {
    const note = await Note.findOne({ where: { id }, paranoid: false });
    if (!note) throw new Error ('Note not found.');
    await note.setTags([]);
    for (let tag of tags) {
        const found = await Tag.findOne({ where: { name: tag.value } });
        if (!found) throw new Error ('Tag not found.');
        await note.addTag(found)
    };
    const notes = await getNotes(archived);
    return notes;
};

module.exports = {
    getNote,
    getNotes,
    postNote,
    putNote,
    archiveRestoreNote,
    deleteNote,
    addTagNote
};