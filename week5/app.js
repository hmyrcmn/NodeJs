const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
  console.log("adres bilgisini parametre olarak veriniz ");
}
geocode(address, (error, data) => {
  if (error) {
    return console.log("hata", error);
  }
  console.log("hata", data);

  forecast(data.longitude, data.latitude, (error, forecastdata) => {
    console.log("hata", data.location);
    if (error) {
      return console.log("hata", error);
    }
    console.log("hata", forecastdata);
    console.log("hata", data.location);

  });
});
// forecast(37.8267,-122.4233,(error,data)=>{

// const url="http://api.weatherstack.com/current?access_key=77ce69c14f63baae1cc568a54e347187&query=37.8267,-122.4233&units=s"
// request({url:url,json:true},(error,response)=> {
//         console.log(error)
//         if(error){
//                 //wifi kapattım
//                 console.log("hava durumu servisine bağlantı kurulamadı ! ")
//         }else if (response.body.error){
//                 console.log("girilen konum bilgisi bulunamadı !! ")
//         }else{
//         // const data=JSON.parse(response.body)
//         // console.log(data.current)

//         console.log("hava sıcaklıgı :",response.body.current.temperature+
//         " \n hissedilen sıcaklık: ",response.body.current.feelslike)
//         }

// })
// hava sıcaklıgı hata kontrolu network hatası, url bulunamadı ,
// response body da current yoksa 404 hatası gösterir.
// current içindeki temperature ve feelslike değişkenlerine erişim sağlar.

//mapboxdan alınan https://api.mapbox.com/geocoding/v5,7mapbox.places/Bursa.json?access_token=pk.
// const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/bursa.json?proximity=ip&access_token=pk.eyJ1IjoiaG15cmNtbiIsImEiOiJjbHR6aW00enUwMGRuMmp0NGNyczVseGxuIn0.qgdxfBjW5ccrcv4JUd1yJw"

// const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/bursa.json?proximity=ip&access_token=pk.eyJ1IjoiaG15cmNtbiIsImEiOiJjbHR6aW00enUwMGRuMmp0NGNyczVseGxuIn0.qgdxfBjW5ccrcv4JUd1yJw"

// request({url:geocodeUrl,json:true},(error,response)=> {

//         if (error) {
//                 console.log("Mapbox API'sine bağlantı kurulamadı!");
//             } else if (response.body.features.length === 0) {
//                 console.log("Belirtilen konum bilgisi bulunamadı!");
//             } else {
//                 const longitude = response.body.features[0].center[0];
//                 const latitude = response.body.features[0].center[1];
//                 console.log("Enlem:", latitude, "\nBoylam:", longitude);
//             }
// //    const longitude=response.body.features[0].center[0]
// //    const latitude=response.body.features[0].center[1]
// //    console.log("enlem:",latitude+ "\n boylam:" ,longitude);
// })
