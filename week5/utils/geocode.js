const request=require('postman-request')
//verilen addres bilgisine göreenlem ve boylam biligsinin  asekron  fonk olarak getirilmesi 
const getGeocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?proximity=ip&access_token=pk.eyJ1IjoiaG15cmNtbiIsImEiOiJjbHR6aW00enUwMGRuMmp0NGNyczVseGxuIn0.qgdxfBjW5ccrcv4JUd1yJw";

  setTimeout(() => {
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Mapbox API'sine bağlantı kurulamadı!", undefined);
      } else if (response.body.features.length === 0) {
        callback("Belirtilen konum bilgisi bulunamadı!", undefined);
      } else {
        const longitude = response.body.features[0].center[0];
        const latitude = response.body.features[0].center[1];
        const location=response.body.features[0].place_name;
        // error burada ilk basta konumlanır 
        callback(undefined, { latitude, longitude ,location});
      }
    });
  }, 2000);
};

module.exports=getGeocode

// getGeocode("adres", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Enlem:", data.latitude, "\nBoylam:", data.longitude);
//   }
// });
