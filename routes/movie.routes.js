const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
	Movie.find()
		.then((movies) => {
			res.render("movies", { movies });
		})
		.catch((err) => console.log("something went wrong", err));
});

router.get("/movies/:id", (req, res, next) => {
	const movieId = req.params.id;

	Movie.findById(movieId)
		.then((movie) => {
			res.render("details", movie);
		})
		.catch((err) => console.log("something went wrong", err));
});

module.exports = router;
