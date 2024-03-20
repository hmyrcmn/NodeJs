const request=require('postman-request')

const url="http://api.weatherstack.com/current?access_key=5c3376fd0dd61382d80dc06521e4bf2a&query=37.8267,-122.4233&units=s"
request({url:url,json:true},(error,response)=> {
        console.log(error)
        if(error){
                //wifi kapattım 
                console.log("hava durumu servisine bağlantı kurulamadı ! ")
        }else if (response.body.error){
                console.log("girilen konum bilgisi bulunamadı !! ")
        }else{
        // const data=JSON.parse(response.body)
        // console.log(data.current)

        console.log("hava sıcaklıgı :",response.body.current.temperature+
        " \n hissedilen sıcaklık: ",response.body.current.feelslike)
        }
   
})
// hava sıcaklıgı hata kontrolu network hatası, url bulunamadı , 
// response body da current yoksa 404 hatası gösterir.
// current içindeki temperature ve feelslike değişkenlerine erişim sağlar.


//mapboxdan alınan https://api.mapbox.com/geocoding/v5,7mapbox.places/Bursa.json?access_token=pk.
const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/bursa.json?proximity=ip&access_token=pk.eyJ1IjoiaG15cmNtbiIsImEiOiJjbHR6aW00enUwMGRuMmp0NGNyczVseGxuIn0.qgdxfBjW5ccrcv4JUd1yJw"

request({url:geocodeUrl,json:true},(error,response)=> {
   const longitude=response.body.features[0].center[0]
   const latitude=response.body.features[0].center[1]
   console.log("enlem:",latitude+ "\n boylam:" ,longitude);
})