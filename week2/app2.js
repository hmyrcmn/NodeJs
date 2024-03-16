const yargs=require('yargs');
const notes=require('./notes.js') 
yargs.version='1.0.0'

// yargs argumanlarının incelenmesi 
// yargs argumanlarının incelenmesi
yargs.command({
        command: 'add',
        // --help ile gözükmesini istediğimiz açıklamanın tanımlanması
        describe: "yeni not ekler",
        builder: {
            title: {
                describe: 'not basligi belirlenir.',
                demandOption: true,
                type: "string"
            },
            body: {
                describe: 'not icerigi belirlenir.',
                demandOption: true,
                type: 'string'
            }
        },
        // komut giirldiğinde ne yapılacagının belirlenmesi
        handler (argv) {
                notes.addNote(argv.title, argv.body);
        //     console.log("baslik:", argv.title);
        //     console.log("title içeriği:", argv.body);


        }
    });
yargs.command({
        command:'remove',
        describe:"not siler",
        builder: {
                title: {
                    describe: 'not basligi silinir.',
                    demandOption: true,
                    type: "string"
                },
                body: {
                    describe: 'not icerigi belirlenir.',
                    demandOption: true,
                    type: 'string'
                }
            },
        handler(argv) {
                // console.log('Bir not silindi');
                notes.removeNote(argv.title);
                }
        })
yargs.command({
        command:'list',
        describe:"notları listeler",
        handler(){
                notes.listNotes();
        }
})

yargs.command({
        command:'read',
        describe:"seçilen notu gösterir",
        // handler:function () {
        //         console.log("Seçili not okunuyor..");
        // }
        // ARROW FONK A DÖNÜŞTÜTRÜLDÜ
        builder: {
                title: {
                    describe: 'not okunur.',
                    demandOption: true,
                    type: "string"
                }
               
            },
        handler (argv) {
                notes.readNotes(argv.title);
        }
        
})

// yargs.argv;
yargs.parse()