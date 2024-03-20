const request = require('postman-request');

const url="http://api.weatherstack.com/current?access_key=5c3376fd0dd61382d80dc06521e4bf2a&query=37.8267,-122.4233%27"
request({url:url,json:true},(error,response)=> {
        
        console.log("hava sıcaklıgı :",response.body.current.temperature,
        
        " \n hissedilen sıcaklık: ",response.body.current.feelslike)
        
   })