console.log("merhaba node js ")

// function toplama(a,b) {return(a+b)}
// console.log("10 ve 20 eklenerek "+toplama(10,20)+" olur.")
//yukarıdaki kodda bir fonksiyon oluşturdum ve içine parametre gönderdim.fonksiyon da bir değer döndürüyor.





// const name=require("./hello2.js")
// console.log("myName: ", name); //bu kodla hello2.js dosyasının içindeki myName değişkenini çağırdım.

// const mult=require("./hello2.js")
// const ansver=mult(4,-2)
// console.log("4*-2=\n ",ansver)


// const getsNotes=require("./hello2.js")
// const message=getsNotes()
// console.log("hello2.js den  import edilen message: \n",message)



const validator = require("validator")

// console.log("humeyra@.edu dogru e mail syntaxinda mı ? ",validator.isEmail("humeyra@.edu.tr"))
// console.log("humeyra@edu.tr dogru e mail syntaxinda mı ? ",validator.isEmail("humeyra@fdvsdf.edu.tr"))


// console.log("BU Bir URL midir? ",validator.isURL('www.btu.edu'))


const chalk=require("chalk");
console.log(chalk.blueBright("bu yazı mavi renkde gözükecektir."))

