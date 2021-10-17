const express = require('express')
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

//Rotas Annotation
routes.get('/annotations', AnnotationController.read)
routes.post('/annotations',AnnotationController.create)
routes.delete('/annotations/:id',AnnotationController.delete)

//Rotas Priority
routes.get('/priorities',PriorityController.read)
routes.post('/priorities/:id', PriorityController.update)

//Rota Content
routes.post('/contents/:id', ContentController.update)

module.exports = routes