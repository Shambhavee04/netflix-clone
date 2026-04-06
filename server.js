process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const path = require("path");

app.use(express.static(path.join(__dirname, "HTML")));
const BASE_URL = "https://api.themoviedb.org/3";

// Trending
app.get("/movies/trending", async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${process.env.API_KEY}`
    );
    res.json(response.data.results);
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching trending movies" });
  }
});

// Top Rated
app.get("/movies/top-rated", async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}`
    );
    res.json(response.data.results);
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching top rated movies" });
  }
});

// Action
app.get("/movies/action", async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
    );
    res.json(response.data.results);
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching action movies" });
  }
});
// 🎬 Movie Details
app.get("/movies/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${req.params.id}?api_key=${process.env.API_KEY}`
    );

    res.json(response.data);

  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching movie details" });
  }
});
// 🎥 Movie Trailer
app.get("/movies/:id/trailer", async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${req.params.id}/videos?api_key=${process.env.API_KEY}`
    );

    res.json(response.data);

  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching trailer" });
  }
});

// Run server
app.listen(5002, () => console.log("Server running on port 5002"));