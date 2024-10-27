const JokeController = require('../controllers/joke.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}
