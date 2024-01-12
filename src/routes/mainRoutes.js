const Router = require('express');
const noteRoutes = require('./noteRoutes');
const tagRoutes = require('./tagRoutes');

const mainRoutes = Router();

mainRoutes.use('/note', noteRoutes);
mainRoutes.use('/tag', tagRoutes);

module.exports = mainRoutes;