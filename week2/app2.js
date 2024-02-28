// import yargs module
const command = require("nodemon/lib/config/command");
const yargs= require("yargs");
yargs.version="1.0.0"

// yargs argumanlarının incelenmesi 
yargs.command({
        command:'add',
        // --help ile gözükmesini istediğimiz açıklamanın tanımlanması 
        describe: "yeni not ekler",
        builder:{
                title: {
                    describe:'not basligi belirlenir.',
                    demandOption:true,
                    type:"string"


                },
                body: {
                        describe:'not icerigi belirlenir.',
                        demandOption:true,
                        type:'string'
                        
        
                }
        },
        // komut giirldiğinde ne yapılacagının belirlenmesi
        handler: function(){
                console.log("baslik:", argv.title);
                console.log("title içeriği:", argv.body)
              }
        
})
yargs.command({
        command:'remove',
        describe:"not siler",
        handler:function() {
                console.log('Bir not silindi');
                }
        })
yargs.command({
        command:'list',
        describe:"notları listeler",
        handler:function(){
                console.log("notlar listelendi")
        }
})

yargs.command({
        command:'read',
        describe:"seçilen notu gösterir",
        handler:function () {
                console.log("Seçili not okunuyor..");
        }
        
})

yargs.argv;