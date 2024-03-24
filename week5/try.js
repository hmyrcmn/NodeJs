const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Hata:', error);
    } else {
        console.log('Hava Sıcaklığı:', response.body.current.temperature);
        console.log('Hissedilen Sıcaklık:', response.body.current.feelslike);
    }
});
