// json kullanımının öğrenilmesi 
const fs= require ("fs")

const book={
        title:"kitap baslıgım",
        author:"kitap yazarı"
}
const bookJSON= JSON.stringify(book)//json nesnesini stringe cevirmek için kullanılan metoddur.
fs.writeFilesSync="deneme.json",bookJSON
console.log("dosya oluşturuldu")



console.log(bookJSON)
// içeirğinde property yoktur title yoktur içeriği görüntülenebilir ama title görüntüleenemz 
console.log(bookJSON.title) // bu öge bulunamaz  hatası alırız çünkü içerikteki property yok string formatında 

const parsedBook = JSON.parse(bookJSON);//parsed olarak  çağrılmak istenilen veriyi döndürür.
console.log(parsedBook.title)
console.log(parsedBook.author)

//bu şekilde erişim sağlandı.

//dosyadan okuma sistemi
const dataBuffer=fs.readFileSync('deneme.json')
// dosyadan okuma yapıldı strye çevrildi ve buffer tipinde bir değişkene atandı.
const dataString=dataBuffer.toString()

//buffer tipinden stringe çevrilerek ekrana yazdırı
const dataJson=dataBuffer.toString()
const data=JSON.parse(dataJson)
console.log(data)

// const dataJson=JSON.parse(dataString)
// console.log(dataJson.title)    
