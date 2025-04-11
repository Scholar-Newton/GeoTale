document.addEventListener("DOMContentLoaded", () => {
    // Check if geolocation is supported
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User coordinates:", latitude, longitude);
  
          // Initialize the map with the user's location
          initMap(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error.message);
          alert("Location access denied or unavailable.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  });

  function initMap(lat, lng) {
    // Create the map centered on user's location
    const map = L.map('map').setView([lat, lng], 13);
  
    // Load and display OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    // Add a marker at the user's location
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup("You are here")
      .openPopup();
  
    // You can call more functions here to fetch data based on lat/lng
  }
    
