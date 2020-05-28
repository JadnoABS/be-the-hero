const express = require('express'),
    OngController = require('./controllers/OngController'),
    IncidentController = require('./controllers/IncidentController'),
    ProfileController = require('./controllers/ProfileController'),
    SessionController = require('./controllers/SessionController'),
    routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;