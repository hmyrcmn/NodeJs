const request=require('postman-request')

const url="http://api.weatherstack.com/current?access_key=5c3376fd0dd61382d80dc06521e4bf2a&query=37.8267,-122.4233&units=f"
request({url:url,json:true},(error,response)=> {
        console.log(error)
        if(error){
                //wifi kapattım 
                console.log("hava durumu servisine bağlantı kurulamadı ! ")
        }else{
        // const data=JSON.parse(response.body)
        // console.log(data.current)

        console.log("hava sıcaklıgı :",response.body.current.temperature+
        " \n hissedilen sıcaklık: ",response.body.current.feelslike)
        }
   
})