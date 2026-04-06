const BASE_URL = "https://netflix-backend-jpo5.onrender.com";

// 🔥 GET MOVIE ID FROM URL
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

console.log("Movie ID:", movieId);

// 🎬 FETCH MOVIE DETAILS
fetch(`${BASE_URL}/movies/${movieId}`)
  .then(res => res.json())
  .then(movie => {

    document.getElementById("title").textContent = movie.title || movie.name;

    document.getElementById("poster").src =
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    document.getElementById("overview").textContent = movie.overview;

  })
  .catch(err => console.log("Movie error:", err));


// 🎥 FETCH TRAILER
fetch(`${BASE_URL}/movies/${movieId}/trailer`)
  .then(res => res.json())
  .then(data => {

    const video = data.results.find(v => v.type === "Trailer");

    if (video) {
      document.getElementById("trailer").src =
        `https://www.youtube.com/embed/${video.key}`;
    }

  })
  .catch(err => console.log("Trailer error:", err));