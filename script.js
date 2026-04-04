let currentMovie = null;

// 🔥 TRENDING
fetch("http://localhost:5002/movies/trending")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("trending");

    // 🎬 Banner (first movie)
    const firstMovie = data.find(movie => movie.backdrop_path);
    if (firstMovie) {
      currentMovie = firstMovie;

      const banner = document.getElementById("banner");
      const title = document.getElementById("banner-title");

      banner.style.backgroundImage =
        "url(https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path + ")";
      title.innerText = firstMovie.title;
    }

    data.forEach(movie => {
      const img = document.createElement("img");
      img.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
      img.style.width = "150px";
      img.style.cursor = "pointer";

      // ✅ CLICK → DETAILS PAGE
      img.onclick = () => {
        window.location.href = `movie.html?id=${movie.id}`;
      };

      container.appendChild(img);
    });
  });

// 🔥 TOP RATED
fetch("http://localhost:5002/movies/top-rated")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("topRated");

    data.forEach(movie => {
      const img = document.createElement("img");
      img.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
      img.style.width = "150px";
      img.style.cursor = "pointer";

      img.onclick = () => {
        window.location.href = `movie.html?id=${movie.id}`;
      };

      container.appendChild(img);
    });
  });

// 🔥 ACTION
fetch("http://localhost:5002/movies/action")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("action");

    data.forEach(movie => {
      const img = document.createElement("img");
      img.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
      img.style.width = "150px";
      img.style.cursor = "pointer";

      img.onclick = () => {
        window.location.href = `movie.html?id=${movie.id}`;
      };

      container.appendChild(img);
    });
  });
  document.getElementById("playBtn").onclick = () => {
  if (currentMovie) {
    window.location.href = `movie.html?id=${currentMovie.id}`;
  }
};