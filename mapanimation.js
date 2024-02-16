// Map api calls
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.35563095356587, lng: -71.05647618835424 },
    zoom: 12,
    mapId: "18e8dbacd559906a",
  });

  //map marker
  new google.maps.Marker({
    position: { lat: 42.35563095356587, lng: -71.05647618835424 },
    map,
    title: "Federal Street & Franklin Street Stop",
    icon: {
      url: "bus.png",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
}

// Bus stops MBTA api call
async function run() {
  const locations = await getBusLocations();
  console.log(new Date());
  console.log(locations);

  // timer
  setTimeout(run, 15000);
}

async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}
run();
