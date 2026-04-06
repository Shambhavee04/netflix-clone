const API = "http://localhost:5002";

let currentMovie = null;

// 🔥 TRENDING (Banner + Row)
fetch(`${API}/movies/trending`)
  .then(res => res.json())
  .then(data => {
console.log("DATA:", data);
    const banner = document.getElementById("banner");
    const title = document.getElementById("banner-title");
    const container = document.getElementById("trending");

    // 🎬 Banner movie
    const movie = data[0];

    if (movie) {
      currentMovie = movie;

      banner.style.backgroundImage =
        `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;

      title.textContent = movie.title;
      document.getElementById("banner-desc").textContent =
  movie.overview?.slice(0, 150) + "...";
    }

    // 🎞️ Row movies
    data.forEach(movie => {
      if (!movie.poster_path) return;

      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

      img.classList.add("row-poster");

      img.onclick = () => {
        window.location.href = `movie.html?id=${movie.id}`;
      };

      container.appendChild(img);
    });

  })
  .catch(err => console.log("Trending error:", err));


// 🔥 TOP RATED
fetch(`${API}/movies/top-rated`)
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("topRated");

    data.forEach(movie => {
      if (!movie.poster_path) return;

      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

      img.classList.add("row-poster");

      img.onclick = () => {
        window.location.href = `movie.html?id=${movie.id}`;
      };

      container.appendChild(img);
    });

  })
  .catch(err => console.log("Top Rated error:", err));


// 🔥 ACTION
fetch(`${API}/movies/action`)
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("action");

    data.forEach(movie => {
      if (!movie.poster_path) return;

      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

      img.classList.add("row-poster");

      img.onclick = () => {
        window.location.href = `movie.html?id=${movie.id}`;
      };

      container.appendChild(img);
    });

  })
  .catch(err => console.log("Action error:", err));


// 🎬 PLAY BUTTON (Banner)
const btn = document.getElementById("playBtn");
const infoBtn = document.getElementById("infoBtn");

// ✅ Info button
if (infoBtn) {
  infoBtn.addEventListener("click", () => {

    console.log("Info clicked:", currentMovie);

    if (!currentMovie) {
      alert("Movie not loaded ❌");
      return;
    }

    window.location.href = `movie.html?id=${currentMovie.id}`;
  });
}

// ✅ Play button (separate!)
if (btn) {
  btn.addEventListener("click", () => {

    console.log("Play clicked:", currentMovie);

    if (!currentMovie) {
      alert("Movie not loaded ❌");
      return;
    }

    window.location.href = `player.html?id=${currentMovie.id}`;
  });
}