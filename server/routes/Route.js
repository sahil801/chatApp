import express from 'express';
import { addUser, getUsers } from '../controller/UserController.js';
import {getConversation,newConversation} from '../controller/conversationControlar.js';
import { getChats, sendMessage } from '../controller/messageController.js';

const Routes = express.Router();

Routes.post('/add',addUser);
Routes.get('/users',getUsers);
Routes.post('/conversation/add',newConversation);
Routes.post('/conversation/get',getConversation);
Routes.post('/message/send',sendMessage);
Routes.get('/message/chats/:id',getChats);

export default Routes;