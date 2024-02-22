function birinciFonksiyon(callback) {
        console.log("Birinci fonksiyon çalışıyor");
        // Simüle edilmiş bir asenkron işlem
        setTimeout(function() {
          console.log("Birinci fonksiyon tamamlandı");
          callback();
        }, 1000);
      }
      
      function ikinciFonksiyon() {
        console.log("İkinci fonksiyon çalışıyor");
      }
      
birinciFonksiyon(ikinciFonksiyon);

