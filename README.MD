`
# GeoTale – Discover the Story Beneath Your Feet

GeoTale is a location‑aware web application that transforms everyday places into engaging educational experiences. By detecting your current position (or any place you choose), GeoTale fetches nearby historical landmarks and cultural facts from Wikipedia and displays them on an interactive map and in a scrollable feed.

---

## 🔍 Purpose

- **Connect** people with the hidden stories around them  
- **Educate** users on local history and culture in a fun, bite‑sized way  
- **Explore** any location—your current position or anywhere in the world  

---

## Why Use GeoTale?

GeoTale isn't just another map—it's your personal **cultural guide**, **history teacher**, and **exploration companion** all in one. Here’s why it’s worth adding to your digital toolkit:

### 🌍 Discover Hidden Stories
GeoTale transforms any location into a gateway to history. Whether you're walking through your hometown or traveling abroad, uncover fascinating facts and forgotten tales about the places around you.

### 🎓 Learn As You Explore
Powered by Wikipedia, GeoTale delivers bite-sized knowledge that’s easy to digest. Great for curious minds, students, or families wanting to make every walk more educational.

### 🔎 Explore the World From Anywhere
Not traveling? No problem. Use the search bar to teleport to any place on the planet and instantly discover what makes it special.

### 🗺️ Interactive Map + Fact Feed
See everything on a clean, intuitive map with pins and popups—plus a scrollable feed of nearby points of interest with distances and links to learn more.

### 🌓 Light & Dark Mode
Day or night, GeoTale adapts to your environment and preference with a sleek dark/light mode toggle—saved automatically for your convenience.

### 💻 No App Install Needed
GeoTale is a **Progressive Web App (PWA)**—just add it to your home screen from your browser and use it like a native app.

### 🔐 Privacy-Friendly
GeoTale only uses your location *in the moment*—it doesn’t store or share any data. No signups, no tracking.

### ⚡ Lightweight & Fast
Optimized for low-resource environments—perfect for use even on older devices or slow networks.

---

## ✨ Features

- **Live Location Detection**  
  Automatically finds your current position via the browser’s Geolocation API.

- **Explore Another Location**  
  Search by city, landmark, or address and instantly jump to that place on the map.

- **Interactive Map**  
  Built with Leaflet and OpenStreetMap tiles, showing your position and nearby points of interest.

- **Dynamic Facts Feed**  
  Fetches up to 15 nearby Wikipedia articles, displays the distance, and links to full articles.

- **Dark / Light Mode**  
  Toggle between light and dark themes; your preference is saved in `localStorage`.

- **Responsive & Accessible**  
  Mobile‑first design, sticky search/map layout, keyboard‑friendly focus states, and ARIA labels.

---

## ⚙️ Setup Instructions

1. **Clone the repository**     ```bash
   git clone https://github.com/Scholar-Newton/geotale.git
   cd geotale
   ```

2. **Obtain an OpenCage API key**  
   Sign up at [OpenCage Data](https://opencagedata.com) (free tier provides 2,500 requests/day).

3. **Configure your API key**  
   Open `script.js` and replace the placeholder with your key:
   ```js
   const apiKey = "YOUR_OPENCAGE_API_KEY";
   ```

4. **Serve the application**  
   Use any static file server. For example, with Python:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit [http://localhost:8000](http://localhost:8000) in your browser.

5. **Allow location access**  
   When prompted, grant GeoTale permission to use your location.

---

## 📡 API Usage

### Geolocation API  
```js
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
```
- Retrieves the user’s latitude and longitude.

### OpenCage Geocoding  
**Endpoint:**  
```
https://api.opencagedata.com/geocode/v1/json?q=<LOCATION_QUERY>&key=<YOUR_API_KEY>
```  
**Parameters:**  
- `q`: Search string (e.g., “Eiffel Tower, Paris”)  
- `key`: Your OpenCage API key  

### Wikipedia Geosearch API  
**Endpoint:**  
```
https://en.wikipedia.org/w/api.php?
  action=query
  &list=geosearch
  &gscoord=<LAT>|<LNG>
  &gsradius=<RADIUS_IN_METERS>
  &gslimit=15
  &format=json
  &origin=*
```  
 **Parameters:**  
- `gscoord`: User coordinates  
- `gsradius`: Search radius in meters  
- `gslimit`: Maximum number of results  
- `origin=*`: Required to bypass CORS  

---

## 🖼️ Screenshots & Demo Video

> Place your images in a `screenshots/` folder and update the paths below.

- **Light Mode – Map View**  
  `screenshots\Screenshot GeoTale ( light mode).png`

- **Dark Mode – Facts Feed**  
  `screenshots\Screenshot GeoTale ( light mode).png`

- **Demo GIF**  
  `screenshots\demo-video.mp4`

---

## 👩‍💻 Developer Notes

- **Extensibility**  
  - Swap in a different geocoding or tile provider (e.g., Mapbox) by changing one line in `initMap()`.  
  - Extend Wikipedia calls to pull images or summaries via the Wikimedia REST API.

- **Offline Fallback (stretch goal)**  
  - Cache recent fetches in `localStorage` for offline revisiting of previously viewed locations.

- **Accessibility**  
  - All interactive elements include focus states and ARIA labels.  
  - Layout is fully keyboard‑navigable and mobile‑friendly.

---

> Happy hacking! Enjoy uncovering the world’s stories right beneath your feet. 🚀  
