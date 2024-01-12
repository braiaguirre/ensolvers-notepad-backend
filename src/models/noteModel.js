const { DataTypes } = require('sequelize');

module.exports = ( sequelize ) => {
    sequelize.define('Note', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title: {
            type: DataTypes.STRING,
            defaultValue: "",
        },
        content: {
            type: DataTypes.TEXT,
            defaultValue: "",
        },
    }, { 
        paranoid: true 
    })
};