# GeoTale – Discover the Story Beneath Your Feet

GeoTale is a location‑aware web application that transforms everyday places into engaging educational experiences. By detecting your location (or any place you choose), GeoTale fetches nearby historical landmarks and cultural facts from Wikipedia and displays them on an interactive map and in a scrollable feed.

---

##  Purpose

- **Connect** people with the hidden stories around them  
- **Educate** users on local history and culture in a fun, bite‑sized way  
- **Explore** any location—your current position or anywhere in the world  

---

##  Features

- **Live Location Detection**  
  Automatically finds your current position via the browser’s Geolocation API.

- **Explore Another Location**  
  Search by city, landmark, or address and instantly jump to that place on the map.

- **Interactive Map**  
  Leaflet + OpenStreetMap tiles show you exactly where you—and nearby points of interest—are.

- **Dynamic Facts Feed**  
  Fetches up to 15 nearby Wikipedia articles, shows distance, and links to full articles.

- **Dark / Light Mode**  
  Toggle between light and dark themes; preference is saved in `localStorage`.

- **Responsive & Accessible**  
  Mobile‑first, sticky search/map layout, keyboard‑friendly focus states, and ARIA labels.

---

##  Setup Instructions

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your‑username/geotale.git
   cd geotale
  
2. **Get an OpenCage API key**
 Sign up at https://opencagedata.com (free tier allows 2,500 requests/day).

3. **Configure the API key**
 In script.js, find the line near the bottom:
   const apiKey = "c9b8d53dae804ba2aa28aa8ba6a768fc"; // replace this
   Replace the string with your own key.

4. **Serve the files**
   You can use any static‑file server. For example, with Python:
   ```bash
   python3 -m http.server 8000
   Then visit http://localhost:8000.

5. **Allow location access**
   When prompted by your browser, allow GeoTale to use your location.

##    API Usage
   **Geolocation API**
   ```bash
    navigator.geolocation.getCurrentPosition()

    Retrieves the user’s latitude and longitude.

    **OpenCage Geocoding**
     Endpoint: https://api.opencagedata.com/geocode/v1/json

    Query parameters:
        q: the location string (city, address, landmark)
        key: your API key

Example request:
```bash
    GET https://api.opencagedata.com/geocode/v1/json
    ?q=Eiffel+Tower+Paris
    &key=YOUR_API_KEY
