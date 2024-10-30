var z = document.getElementById("myBtn2");
z.addEventListener("click", selectOption3);

function selectOption3() {


  const startstoppath = [
    [12.922915, 80.127457],
    [12.82428, 79.70116],
    [12.506997, 79.60343],
    [12.23526, 79.07481]
  ];

//adding polypine
var polyline = L.polyline(startstoppath, {color: 'red', weight:8, lineCap:'round'}).addTo(map);
map.fitBounds(polyline.getBounds());


//adding car maker
const carmarker = L.marker(startstoppath[0], { icon: L.icon({
iconUrl: 'https://svgsilh.com/svg/2386838.svg',
iconSize: [60, 95]
})
}).addTo(map);


//adding location maker
const locationmarker1 =L.marker(startstoppath[0], { icon: L.icon({
iconUrl: 'https://www.svgrepo.com/show/312483/location-indicator-red.svg',
iconSize: [50,50],
iconAnchor: [12, 41]
})
}).addTo(map);

const locationmarker2 =L.marker(startstoppath[1], { icon: L.icon({
iconUrl: 'https://www.svgrepo.com/show/312483/location-indicator-red.svg',
iconSize: [50,50],
iconAnchor: [12, 41]
})
}).addTo(map);

const locationmarker3 =L.marker(startstoppath[2], { icon: L.icon({
iconUrl: 'https://www.svgrepo.com/show/312483/location-indicator-red.svg',
iconSize: [50,50],
iconAnchor: [12, 41]
})
}).addTo(map);   

const locationmarker4 =L.marker(startstoppath[3], { icon: L.icon({
iconUrl: 'https://www.svgrepo.com/show/312483/location-indicator-red.svg',
iconSize: [50,50],
iconAnchor: [12, 41]
})
}).addTo(map);

// Function to simulate vehicle movement
let index = 0;
function Vehicle() {
index++;
if (index >= startstoppath.length) {
index = 0; 
}

const newLocation = startstoppath[index];
carmarker.setLatLng(newLocation);

map.panTo(newLocation);
}
setInterval(Vehicle, 4000);     


}