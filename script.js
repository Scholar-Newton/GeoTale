document.addEventListener("DOMContentLoaded", () => {
  // Check if Geolocation is supported
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        console.log("User location:", latitude, longitude);

        // Initialize the map
        initMap(latitude, longitude);
      },
      (error) => {
        console.error("Geolocation error:", error.message);
        alert("Could not retrieve your location. Please enable location access.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});

// Function to initialize Leaflet map
function initMap(lat, lng) {
  const map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("📍 You are here")
    .openPopup();
}
document.addEventListener("DOMContentLoaded", () => {
  // Check if Geolocation is supported
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        console.log("User location:", latitude, longitude);

        // Initialize the map
        initMap(latitude, longitude);
      },
      (error) => {
        console.error("Geolocation error:", error.message);
        alert("Could not retrieve your location. Please enable location access.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});

// Function to initialize Leaflet map
function initMap(lat, lng) {
  const map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("📍 You are here")
    .openPopup();
}
