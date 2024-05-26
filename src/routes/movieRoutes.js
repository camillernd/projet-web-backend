const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Routes pour les films
router.post('/', movieController.createMovie);
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);
// Route PUT pour mettre à jour uniquement l'URL du poster d'un film
router.put('/:id/url', movieController.updateMovieURL);
// Rechercher des films par titre
router.get('/search/title', movieController.searchMoviesByTitle);

module.exports = router;
