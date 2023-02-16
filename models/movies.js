const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
mov_title: String,
mov_year: Number,
mov_time: Number,
mov_lang: String,
mov_dt_rel: String,
mov_rel_country: String
});

module.exports = mongoose.model("movies", moviesSchema);
