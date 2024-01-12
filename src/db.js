require('dotenv').config();
const { Sequelize } = require('sequelize');
const { pg } = require('pg');
const { POSTGRES_URL_NON_POOLING } = process.env;

const noteModel = require('./models/noteModel');
const tagModel = require('./models/tagModel');

const sequelize = new Sequelize(
    `${POSTGRES_URL_NON_POOLING}?sslmode=require`,  
    { logging: false, native: false, dialect: "postgres", dialectModule: pg });

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