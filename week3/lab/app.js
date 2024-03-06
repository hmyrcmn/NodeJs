// import yargs module
// const command = require("nodemon/lib/config/command");
const yargs= require("yargs");
yargs.version="1.0.0"





yargs.command({
        command: '+', // add de yazabiliriz sorun olmuyor 
        describe: 'Toplama işlemi',
        builder: {
            num1: {
                describe: 'Birinci sayı',
                demandOption: true,
                type: 'number'
            },
            num2: {
                describe: 'İkinci sayı',
                demandOption: true,
                type: 'number'
            }
        },
        handler: function (argv) {
                const add=require("./add.js")
                console.log("num1:",argv.num1,"num2:",argv.num2,"sonuc:",add(argv.num1, argv.num2))  
           
        }
    });
    



yargs.command({
command: 'sub',
describe: 'cıkartma işlemi',
builder: {
        num1: {
        describe: 'Birinci sayı',
        demandOption: true,
        type: 'number'
        },
        num2: {
        describe: 'İkinci sayı',
        demandOption: true,
        type: 'number'
        }
},
handler: function (argv) {
        const sub=require("./sub.js")
        console.log("num1:",argv.num1,"num2:",argv.num2,"sonuc:",sub(argv.num1, argv.num2))  
        
}
});

yargs.command({
        command: 'mult',
        describe: 'carpma işlemi',
        builder: {
                num1: {
                describe: 'Birinci sayı',
                demandOption: true,
                type: 'number'
                },
                num2: {
                describe: 'İkinci sayı',
                demandOption: true,
                type: 'number'
                }
        },
        handler: function (argv) {
                const mult=require("./mult.js")
                console.log("num1:",argv.num1,"num2:",argv.num2,"sonuc:",mult(argv.num1, argv.num2))  
                
        }
        });
        

yargs.command({
        command: 'div',
        describe: 'bolme işlemi',
        builder: {
                num1: {
                describe: 'Birinci sayı',
                demandOption: true,
                type: 'number'
                },
                num2: {
                describe: 'İkinci sayı',
                demandOption: true,
                type: 'number'
                }
        },
        handler: function (argv) {
                const div=require("./div.js")
                console.log("num1:",argv.num1,"num2:",argv.num2,"sonuc:",div(argv.num1, argv.num2))  
                
        }
        });
        
        

    yargs.parse();