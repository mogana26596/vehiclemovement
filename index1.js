var x = document.getElementById("myBtn");
x.addEventListener("click", selectOption1);

function selectOption1() {

const startstoppath = [
        [11.92993, 79.82468],
        [12.22685, 79.65094],
        [12.504760, 79.893440],
        [12.683995, 79.983345],
        [12.922915, 80.127457]        
      ];

//adding polypine
var polyline = L.polyline(startstoppath, {color: 'yellow', weight:8, lineCap:'round'}).addTo(map);
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

const locationmarker5 =L.marker(startstoppath[4], { icon: L.icon({
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
setInterval(Vehicle, 2000);     

}