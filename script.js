document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  // Show loader at start
  loader.style.display = "flex";

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("User location:", latitude, longitude);

        initMap(latitude, longitude);

        // Hide loader after map loads
        loader.style.display = "none";
      },
      (error) => {
        console.error("Geolocation error:", error.message);
        alert("Unable to detect your location.");
        loader.style.display = "none"; // Hide loader on error too
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
    loader.style.display = "none";
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