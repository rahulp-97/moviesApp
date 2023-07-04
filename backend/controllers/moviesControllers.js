const moviesData = require('../data/moviesData');

exports.getMovies = (req, res, next) => {
    res.json(moviesData);
    next();
}