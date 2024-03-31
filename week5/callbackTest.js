// //asekron callback fonksiyonu
// setTimeout(() => {
//        console.log("2 saniye bekleme time out")
// }, 2000);

// // sekron callback fonksiyon
// const names=["ali","veli","emre"];
// // const shortNames=names.filter(name=> name.length<4) // filter ile kısa isimleri bulduk
// // console.log(shortNames)

// const shortNames=names.filter(name=> {
//         return name.length<4

// }) // filter ile kısa isimleri bulduk

// console.log(shortNames)

// //sekron bir veri getirme işlemi
// const geocode =(address,callback) =>{
//         const data ={
//                 latitude:0,
//                 longitude:0
//         }
//         return data
// }

// const data=geocode("bursa")
// console.log(data)

// // Asenkron bir veri getirme işlemi
// const geocode = (address, callback) => {
//         setTimeout(() => {
//           const data = {
//             latitude: 0,
//             longitude: 0,
//           }
//           callback(data);
//         }, 2000);
//       };

//       geocode("bursa", (data) => {
//         console.log(data);
//       });

  //asekron işlem için settime kullanıyoruz asekron olan herhangi bir fonksiyon kullanılabilir
  const add = (a, b, callback) => {
        // Simulate asynchronous behavior using setTimeout
        setTimeout(() => {
          // Calculate the sum
          const sum = a + b;
          // Call the callback function with the calculated sum
          callback(sum);
        }, 2000);
      };

// 1+4 degeri asekron toplamaişlemine gönderilir sonuç sum a atanır ve arrow fonksiyon için de sum yazdırlır
add(1, 4, (sum) => {
        console.log(sum); // Log the result after 2 seconds
      });