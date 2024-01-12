const { 
    getNote,
    getNotes,
    postNote,
    putNote,
    archiveRestoreNote,
    deleteNote,
    addTagNote
} = require('../dataAccess/noteDao');

const getNoteService = async(id) => {
    try {
        return await getNote(id);
    } catch (err) {
        throw new Error(err.message);
    };
};

const getNotesService = async(archived, filter) => {
    try {

        return await getNotes(archived, filter);
    } catch (err) {
        throw new Error(err.message);
    };
};

const postNoteService = async(content) => {
    try {
        return await postNote(content);
    } catch (err) {
        throw new Error(err.message);
    };
};

const putNoteService = async(id, title, content) => {
    try {
        return await putNote(id, title, content);
    } catch (err) {
        throw new Error(err.message);
    };
};

const archiveRestoreNoteService = async(id) => {
    try {
        return await archiveRestoreNote(id);
    } catch (err) {
        throw new Error(err.message);
    };
};

const deleteNoteService = async(id) => {
    try {
        return await deleteNote(id);
    } catch (err) {
        throw new Error(err.message);
    };
};

const addTagNoteService = async(id, tags, archived) => {
    try {
        return await addTagNote(id, tags, archived);
    } catch (err) {
        throw new Error(err.message);
    };
};

module.exports = {
    getNoteService,
    getNotesService,
    postNoteService,
    putNoteService,
    archiveRestoreNoteService,
    deleteNoteService,
    addTagNoteService
}