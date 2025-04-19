document.addEventListener("DOMContentLoaded", () => {
  const loader       = document.getElementById("loader");
  const searchInput  = document.getElementById("searchLocation");
  const searchButton = document.getElementById("searchButton");
  const themeToggle  = document.getElementById("themeToggle");
  const root         = document.documentElement;
  const DEFAULT_RADIUS_KM = 5;

  let mapRef      = null;
  let userCoords  = null;
  let markerGroup = null;

  // --- Theme Initialization ---
  const savedTheme = localStorage.getItem("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    root.classList.remove("dark");
    themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    if (root.classList.toggle("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });

  // --- Search‑bar handler ---
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (!query) return alert("Please enter a location to explore.");
    geocodeAndFetch(query, DEFAULT_RADIUS_KM);
  });

  // --- On load: get user’s location ---
  if ("geolocation" in navigator) {
    loader.style.display = "flex";
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        userCoords = { lat: coords.latitude, lng: coords.longitude };
        initMap(userCoords.lat, userCoords.lng);
        addUserMarker(userCoords.lat, userCoords.lng);
        await fetchNearbyWikipedia(userCoords.lat, userCoords.lng, DEFAULT_RADIUS_KM);
        loader.style.display = "none";
      },
      err => {
        console.error("Geolocation error:", err.message);
        alert("Unable to detect your location.");
        loader.style.display = "none";
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }

  // --- Initialize Leaflet map with OSM tiles ---
  function initMap(lat, lng) {
    mapRef = L.map("map").setView([lat, lng], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapRef);
    markerGroup = L.layerGroup().addTo(mapRef);
  }

  // --- Add “You are here” marker ---
  function addUserMarker(lat, lng) {
    L.marker([lat, lng])
      .addTo(mapRef)
      .bindPopup("📍 You are here")
      .openPopup();
  }

  // --- Fetch nearby Wikipedia articles within given radius (km) ---
  function fetchNearbyWikipedia(lat, lng, radiusKm) {
    const meters = radiusKm * 1000;
    return fetch(`https://en.wikipedia.org/w/api.php?` +
      new URLSearchParams({
        action:   "query",
        list:     "geosearch",
        gscoord:  `${lat}|${lng}`,
        gsradius: meters,
        gslimit:  15,
        format:   "json",
        origin:   "*"
      }))
    .then(r => r.json())
    .then(data => {
      const places = data.query.geosearch;
      renderCards(places);
      renderMarkers(places);
    })
    .catch(err => console.error("Wikipedia fetch error:", err));
  }

  // --- Render info cards ---
  function renderCards(places) {
    const sec = document.getElementById("info-section");
    sec.innerHTML = places.length
      ? places.map(p => `
          <div
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4
                   border-l-4 border-geo-blue transition transform hover:scale-105 animate-fadeIn"
          >
            <h2 class="text-xl font-semibold text-geo-blue dark:text-geo-green">
              ${p.title}
            </h2>
            <p class="text-sm text-geo-gray dark:text-gray-300 mt-1">
              Distance: ${Math.round(p.dist)} m
            </p>
            <a
              href="https://en.wikipedia.org/?curid=${p.pageid}"
              target="_blank"
              class="mt-2 inline-block text-sm text-geo-blue dark:text-geo-green hover:underline"
            >
              Learn more →
            </a>
          </div>
        `).join("")
      : `<div class="text-center text-gray-600 dark:text-gray-400">
           No nearby facts found.
         </div>`;
  }

  // --- Render map markers ---
  function renderMarkers(places) {
    markerGroup.clearLayers();
    places.forEach(p => {
      L.marker([p.lat, p.lon])
        .bindPopup(
          `<strong>${p.title}</strong><br>
           <a href="https://en.wikipedia.org/?curid=${p.pageid}" target="_blank">
             Learn more
           </a>`
        )
        .addTo(markerGroup);
    });
  }

  // --- Geocode a search query and refetch Wikipedia facts ---
  function geocodeAndFetch(query, radiusKm) {
    const apiKey = "c9b8d53dae804ba2aa28aa8ba6a768fc";
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        query
      )}&key=${apiKey}`
    )
      .then(r => r.json())
      .then(data => {
        if (!data.results.length) throw new Error("Not found");
        const { lat, lng } = data.results[0].geometry;
        userCoords = { lat, lng };
        mapRef.setView([lat, lng], 13);
        fetchNearbyWikipedia(lat, lng, radiusKm);
      })
      .catch(err => {
        console.error("OpenCage error:", err);
        alert("Location not found or an error occurred.");
      });
  }
});
