# GeoTale – Discover the Story Beneath Your Feet

GeoTale is a location‑aware web application that transforms everyday places into engaging educational experiences. By detecting your current position (or any place you choose), GeoTale fetches nearby historical landmarks and cultural facts from Wikipedia and displays them on an interactive map and in a scrollable feed.

---

## 🔍 Purpose

- **Connect** people with the hidden stories around them  
- **Educate** users on local history and culture in a fun, bite‑sized way  
- **Explore** any location—your current position or anywhere in the world  

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

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your‑username/geotale.git
   cd geotale

2. **Obtain an OpenCage API key**
-   Sign up at (OpenCage Data)[https://opencagedata.com/] (free tier provides 2,500 requests/day). 

3. **Configure your API key**
-  Open script.js and locate the line:
  ```bash   
  const apiKey = "c9b8d53dae804ba2aa28aa8ba6a768fc"; // replace this

4. **Serve the application**
-  You can use any static file server. For example, with Python:
   ```bash
   python3 -m http.server 8000

-  Then open your browser at http://localhost:8000.
