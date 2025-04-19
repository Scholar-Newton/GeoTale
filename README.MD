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
   git clone https://github.com/Scholar-Newton/geotale.git
   cd geotale

2. **Obtain an OpenCage API key**
-   Sign up at https://opencagedata.com/ (free tier provides 2,500 requests/day). 

3. **Configure your API key**
-  Open script.js and locate the line:

  ```bash   
  const apiKey = "c9b8d53dae804ba2aa28aa8ba6a768fc"; // replace this


4. **Serve the application**
-  You can use any static file server. For example, with Python:

     ```bash
   python3 -m http.server 8000

-  Then open your browser at http://localhost:8000.


5. **Allow location access**
  When prompted by the browser, grant GeoTale permission to use your location.

##  📡 API Usage
   **Geolocation API**  
-  Method: navigator.geolocation.getCurrentPosition()
-  Retrieves the user’s latitude and longitude.

    **OpenCage Geocoding**
-  Endpoint:
     ```bash     
   https://api.opencagedata.com/geocode/v1/json
  ?q=<LOCATION_QUERY>
  &key=<YOUR_API_KEY>


-  Parameters:
   -q: search string (e.g., “Eiffel Tower, Paris”)
   -key: your OpenCage API key 

   **Wikipedia Geosearch API**
-  Endpoint:
     ```bash
   https://en.wikipedia.org/w/api.php
  ?action=query
  &list=geosearch
  &gscoord=<LAT>|<LNG>
  &gsradius=<RADIUS_IN_METERS>
  &gslimit=15
  &format=json
  &origin=*


- Parameters:
    -gscoord: user coordinates
    -gsradius: search radius in meters
    -gslimit: max number of results
    -origin=*: required to bypass CORS

##  🖼️ Screenshots & Demo GIF     
   **Light Mode – Map View**

   **Dark Mode – Facts Feed**

   **Demo GIF**

##  👩‍💻 Developer Notes
-   Extensibility:
      -You can swap in a different geocoding or tile provider (e.g., Mapbox) by changing one line in initMap().
      -Wikipedia calls could be extended to pull images or extract summaries via the Wikimedia REST API.   

-   Offline Fallback (stretch goal):
       -Cache recent fetches in localStorage so users can revisit previously viewed locations without an internet connection.

-   Accessibility:             
        -All interactive elements have focus states and ARIA labels.
        -The layout is keyboard‑navigable and mobile‑friendly.

        Happy hacking! Enjoy uncovering the world’s stories right beneath your feet. 🚀