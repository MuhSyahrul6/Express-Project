const express = require('express');
const friendsController = require('../controllers/friends.controller'); // Sesuaikan dengan lokasi controller yang sesuai

const friendsRouter = express.Router();

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
