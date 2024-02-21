const getnotes=require("./notes.js")
const message=getnotes()

console.log(message)


// npm mopul ekleme ve projede kullanma 



// paket indirme : npm install validator
// özel versiyon istersen :npm install validator@13.11.0  

const validator = require('validator');
console.log(validator.isEmail('foo@.com')); 
const feedback= validator.isEmail('foo@.com')
// if(feedback){

// }


console.log(validator.isURL("https://www.npmjs.com/package/validator")); 


// NEW MODEL CHALK 
const chalk = require('chalk');


console.log(chalk.green('Hello chalk!'));

// modulu global eklemk için :  npm install nodemon