# GeoTale – Discover the Story Beneath Your Feet

GeoTale is a location‑aware web app that turns any place into an educational adventure. By detecting your current position—or any place you search—GeoTale fetches nearby landmarks and cultural facts from Wikipedia, displaying them on an interactive map and in a scrollable feed.

---

## 🔍 Purpose

- **Connect** you with hidden local stories  
- **Educate** via bite‑sized history and trivia  
- **Explore** your current location or anywhere in the world  

---

## 🙌 Why Use GeoTale?

- **Discover Hidden Stories**  
  Uncover fascinating facts and forgotten tales on every street.

- **Learn on the Go**  
  Powered by Wikipedia, delivering quick, reliable insights.

- **Anywhere Exploration**  
  Teleport to any city or landmark via the search bar.

---

## ✨ Features

- **Live Location Detection** via the Geolocation API  
- **Search Any Place** by city, landmark, or address  
- **Interactive Map** built with Leaflet + OpenStreetMap  
- **Dynamic Facts Feed** of up to 15 nearby Wikipedia articles  
- **Dark/Light Mode** toggle; preference saved in `localStorage`  
- **Responsive & Accessible**: mobile‑first, keyboard‑friendly, ARIA labels  

---

## ⚙️ Setup Instructions

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Scholar-Newton/geotale.git
   cd geotale
   ```

2. **Get an OpenCage API key**  
   Sign up at [OpenCage Data](https://opencagedata.com/) (free tier: 2,500 requests/day).

3. **Configure your key**  
   In `script.js`, replace:
   ```js
   const apiKey = "YOUR_OPENCAGE_API_KEY";
   ```

4. **Serve locally**  
   ```bash
   python3 -m http.server 8000
   ```
   Open [http://localhost:8000](http://localhost:8000).

5. **Allow location access** when prompted.

---

## 📡 API Usage

- **Geolocation API**  
  ```js
  navigator.geolocation.getCurrentPosition(success, error);
  ```
- **OpenCage Geocoding**  
  ```
  https://api.opencagedata.com/geocode/v1/json
    ?q=<LOCATION_QUERY>&key=<YOUR_API_KEY>
  ```
- **Wikipedia Geosearch**  
  ```
  https://en.wikipedia.org/w/api.php?
    action=query&list=geosearch&gscoord=<LAT>|<LNG>
    &gsradius=<METERS>&gslimit=15&format=json&origin=*
  ```

---

## 🖼️ Screenshots & Demo

_Place images in `screenshots/` and update paths below._

- **Light Mode – Map View**  
  ![Map View (light mode)](<screenshots\Screenshot GeoTale (light mode).png>)

- **Dark Mode – Facts Feed**  
  !Map View (dark mode)](<screenshots\Screenshot GeoTale (dark mode).png>)
- **Demo Video**  
  `screenshots/demo.mp4`

---

## 👩‍💻 Developer Notes

- **Extensibility**  
  Swap geocoding/tile providers (e.g., Mapbox) by editing one line in `initMap()`.  
  Extend Wikipedia calls for images or summaries via the Wikimedia REST API.

- **Offline Fallback (stretch goal)**  
  Cache recent fetches in `localStorage` to revisit offline.

- **Accessibility**  
  All interactive elements have focus states and ARIA labels; fully keyboard‑navigable.

> Happy hacking! Enjoy uncovering the world’s stories right beneath your feet. 🚀