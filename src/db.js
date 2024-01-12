require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const noteModel = require('./models/noteModel');
const tagModel = require('./models/tagModel');

const sequelize = new Sequelize(
    `postgres://${ DB_USER }:${ DB_PASSWORD }@${ DB_HOST }/${ DB_NAME }?ssl=true`,
    { logging: false, native: false });
//TEST
noteModel(sequelize);
tagModel(sequelize);

const {
    Note,
    Tag,
} = sequelize.models;

Note.belongsToMany(Tag, { through: 'Notes_Tags'});
Tag.belongsToMany(Note, { through: 'Notes_Tags'});

module.exports = {
    ...sequelize.models,
    conn: sequelize
};