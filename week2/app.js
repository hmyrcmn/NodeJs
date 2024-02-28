const { required } = require("nodemon/lib/config")

console.log("teori dersi hafta -2 ")


console.log(process.argv)


const command=process.argv[2]  // argumanların çekilmesi
// bu argumanın ne oldugunun tespit edilmesi
// 3 adet eşittir kullanılmasının sebebi deger kontrolunun yanı sıra tip kontrolu yapıyor str ve int 1 degerni farklı olarak algılar 
if(command==="add"){
        console.log("yeni not ekleniyor!!!")
}else if (command==="remove"){
        console.log("not siliniyor!!!")
}else if (command==="list"){
        console.log("not listeleniyor !!!")
}else{
        console.log(`"${command}" isimli komut bulunamadi`)
}
// console.log(process.argv)

// import yargs module
const yargs= require("yargs");
yargs.version="1.0.0"

// yargs argumanlarının incelenmesi 
console.log(yargs.argv)

console.log(yargs.argv.ver)