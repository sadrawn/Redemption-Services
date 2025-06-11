var map = L.map("map").setView([38.02552103292696, 46.36572856275305], 13); // Tabriz El Goli coordinates

// Dark-themed OpenStreetMap layer (No API Key Required)
L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20
}).addTo(map);

// Add a marker at the location inside the park
L.marker([38.025, 46.365]).addTo(map)  // Adjusted coordinates inside El Goli Park
    .bindPopup("Tabriz El Goli")
    .openPopup();