import express from 'express';
import ClassesControler from './controllers/ClassesController';
import ConnectionsControler from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesControler();
const connectionsController = new ConnectionsControler();

routes.get('/users/', classesController.index);
routes.post('/users/', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;