const fs = require("fs");
const chalk = require('chalk');

// const addNote =  function(title, body) { conver to arrow fonk 
const addNote =  (title, body) =>{
    const notes = loadNotes(); // bir dizi döndürecektir
    // const duplicatesNotes = notes.filter( (note) => note.title === title);

    //performans artımı için kayıtlı her not filter ile bakılıyor tüm elemanlara bakmasın bulunca bakmayı bıraksın !
    const duplicatesNotes=notes.find((note) => note.title === title );

    // notes'ların özgün olmasını nasıl sağlanır?
    // notes içindeki her eleman için tekrar tekrar çalıştırılır
    // const duplicatesNotes = notes.filter(function (note) {
    //     return note.title === title;
    // });
    // ARROW FONK AD DÖNÜŞTÜRÜLDÜ

    // if (duplicatesNotes.length === 0) {
        // array sonuna obje ekler

    console.log(duplicatesNotes); // aynı title bir note varsa onu bulur döndürüryoksa undefined olur 

    debugger
    if(!duplicatesNotes){ // tekrarlı not oyksa aynı title yoksa eklenecek 
        // if(duplicatesNotes===undefined)
        notes.push({
            // notes arasındaki title 
            title: title, // fonksiyondaki title
            body: body
        });
        // console.log(notes)
        saveNotes(notes);
        console.log(chalk.greenBright.inverse("note added! "));
    } else {
        console.log(chalk.redBright.inverse("note already added ! "));
    }




};

// const getNotes= function (title) {
//     const notes = loadNotes();
//     const foundNote = notes.find(function (note) {
//         return note.title === title;
//     });

//     if (foundNote) {
//         console.log(chalk.blueBright.inverse("Note found!"));

//     } else {
//         console.log(chalk.redBright.inverse("Note not found!"));
//     }
// };

const loadNotes = function () {
    // oluşturulmamış dosya ise boş bir dizi olması gerekiyor yoksa içeriğini okuması gerekliKkk
    try {
        // dosyadan okur
        const dataBuffer = fs.readFileSync("notes.json");
        // okunan veri json formatına dönüşütürülür
        const dataJSON = dataBuffer.toString();
        // json formatına parse edilir string file yapılıyor 
        // string formatına parse ediliyor
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const removeNote = (title)=> {
    const notes = loadNotes();
    
    // Silmek istediğiniz notun başlığı ile eşleşmeyen notları içeren bir dizi oluşturun
    // const filteredNotes = notes.filter(function (note) {
    //     return note.title !== title;
    // });

    const filteredNotes = notes.filter(note => note.title !== title);



    if (notes.length !== filteredNotes.length) {
        console.log(chalk.greenBright.inverse("Note removed!"));
        saveNotes(filteredNotes);
    } else {
        console.log(chalk.redBright.inverse("Note not found!"));
    }
};

const saveNotes = function (notes) {
    // notları notlar.json adresine kaydetmeyi ifade ediyor
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

const listNotes=()=>{
    const notes = loadNotes();

    console.log(chalk.inverse.yellow("\n kayıtlı notlar: \n\n"))
    // arrayın her elemanına note olarak ele alındı .
    notes.forEach((note) => console.log(`${chalk.blue(note.title)} : ${chalk.white(note.body)}`));
}
const readNotes=(title)=>{
        //  const notes = loadNotes().find( note=>note.title===process.argv[2]);
          const note = loadNotes().find( note=>note.title===title);
        if(note){
            console.log(chalk.inverse.greenBright(note.title));
        }else{
            console.log(chalk.inverse.redBright( "geçersiz istek" ));
        }
}
module.exports = {
        addNote: addNote,
        // getNotes: getNotes,
        removeNote: removeNote,
        listNotes:listNotes,
        readNotes:readNotes
    };