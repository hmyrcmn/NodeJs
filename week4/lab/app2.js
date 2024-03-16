// Düzenli fonksiyon ile tek mi çift mi kontrolü
function tekMiCiftMiDuzenli(sayi) {
        setTimeout(() => {
                console.log("Arrow function Callback this ", this);
              }, 1000);
        if (sayi % 2 === 0) {
            return "Çift sayıdır.";
        } else {
            return "Tek sayıdır.";
        }
     
    }
    
    // Ok fonksiyonu ile tek mi çift mi kontrolü
    const tekMiCiftMiOk = (sayi) => (sayi % 2 === 0 ? "Çift sayıdır." : "Tek sayıdır.");
    
    // Kullanım örneği
    const testSayi = 7;
    console.log(`Sayı ${testSayi} ${tekMiCiftMiDuzenli(testSayi)}`);
    console.log(`Sayı ${testSayi} ${tekMiCiftMiOk(testSayi)}`);
    