const express = require('express');

const WishlistRouter = require('./wishlist.route');
const PokedexRouter = require('./pokedex.route');
const UserRouter = require('./user.route');

const Routes = express.Router();

Routes.use('/api', WishlistRouter);
Routes.use('/api', PokedexRouter);
Routes.use('/api', UserRouter);

module.exports = Routes;
