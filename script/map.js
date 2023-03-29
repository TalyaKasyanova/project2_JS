function initializeMap() {
  // координати міста Monticello в США
  const monticelloCoords = {
    lat: 42.2242,
    lng: -74.7853
  };
  // створення карти і центрування на місті Monticello
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: monticelloCoords,
  });

  // додавання відмітки на центр міста
  const infowindow = new google.maps.InfoWindow({
    content: '<h3>Центр міста Monticello</h3>'
  });

  const marker = new google.maps.Marker({
    position: monticelloCoords,
    map: map,
    title: 'Центр міста Monticello'
  });

  // відкривання відмітки при завантаженні сторінки
  infowindow.open(map, marker);
}

window.initializeMap = initializeMap;


// function initMap() {
//   const mapFrame = document.getElementById("map");
//   const location = mapFrame.src.split("q=")[1].split("&")[0].replace(/\+/g, " ");
//   const geocoder = new google.maps.Geocoder();
//   geocoder.geocode({ address: location }, function (results, status) {
//     if (status === "OK") {
//       const map = new google.maps.Map(mapFrame, {
//         zoom: 14,
//         center: results[0].geometry.location,
//       });
//       const marker = new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: map,
//       });
//     } else {
//       console.error("Geocode was not successful for the following reason: " + status);
//     }
//   });
// }

// window.initMap = initMap;