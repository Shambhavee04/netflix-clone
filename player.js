const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

async function loadPlayer() {
  try {
    const res = await fetch(`/movie/${movieId}/videos`);
    const data = await res.json();

    const trailer = data.results.find(
      vid => vid.type === "Trailer" && vid.site === "YouTube"
    );

    if (trailer) {
      const youtubeUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;

      document.getElementById("video-container").innerHTML = `
        <iframe 
          width="900" 
          height="500"
          src="${youtubeUrl}"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen>
        </iframe>
      `;
    } else {
      document.getElementById("video-container").innerHTML =
        "<p style='text-align:center;'>No trailer available 😢</p>";
    }

  } catch (err) {
    console.error(err);
  }
}

// Back button
function goBack() {
  window.history.back();
}

// Load player
loadPlayer();