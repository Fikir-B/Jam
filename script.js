console.log("Jam App is running");

// Initialize map
var map = L.map('map').setView([9.03, 38.74], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example: Animated markers for streets to avoid
var streetsToAvoid = [
  { name: "Bole Road", lat: 9.020, lng: 38.780 },
  { name: "Mexico Street", lat: 9.030, lng: 38.740 },
  { name: "Kazanchis Street", lat: 9.035, lng: 38.755 }
];

streetsToAvoid.forEach((street, i) => {
  var marker = L.marker([street.lat, street.lng]).addTo(map);
  marker.bindPopup(`<b>${street.name}</b><br>Heavy traffic`);
  // Animate marker bounce
  setTimeout(() => {
    marker.openPopup();
  }, i * 1000);
});
