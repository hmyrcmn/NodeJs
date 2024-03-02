const fs = require("fs");

const book = {
  title: "kitap başlığım",
  author: "kitap yazarı"
};

// JSON.stringify yöntemi kullanılarak book nesnesini JSON formatına çeviriyoruz.
const bookJSON = JSON.stringify(book);

console.log(typeof bookJSON); // "string" olarak gelir
console.log(bookJSON); // {"title":"kitap başlığım","author":"kitap yazarı"}

// Ancak, bookJSON bir string olduğu için title ve author özelliklerine doğrudan erişim sağlanamaz.
// Doğru kullanım, JSON verisini bir dosyaya yazmak olacaktır.
fs.writeFileSync("deneme.json", bookJSON);
console.log("Dosya oluşturuldu.");

// Dosyadan okuma yapılır ve buffer'a alınır.
const dataBuffer = fs.readFileSync('deneme.json');

// Buffer tipindeki veriyi bir stringe dönüştürürüz.
const dataJSON = dataBuffer.toString();

// String ifadesini JSON veri nesnesine dönüştürürüz.
const data = JSON.parse(dataJSON);

console.log("Çekilen title:", data.title); // "kitap başlığım" olarak gelir
console.log("Çekilen author:", data.author); // "kitap yazarı" olarak gelir

