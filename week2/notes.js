const fs = require("fs");
const chalk = require('chalk');

const addNote = function (title, body) {
    const notes = loadNotes(); // bir dizi döndürecektir

    // notes'ların özgün olmasını nasıl sağlanır?
    // notes içindeki her eleman için tekrar tekrar çalıştırılır
    const duplicatesNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicatesNotes.length === 0) {
        // array sonuna obje ekler
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

const getNotes= function (title) {
    const notes = loadNotes();
    const foundNote = notes.find(function (note) {
        return note.title === title;
    });

    if (foundNote) {
        console.log(chalk.blueBright.inverse("Note found!"));

    } else {
        console.log(chalk.redBright.inverse("Note not found!"));
    }
};

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

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        console.log(chalk.greenBright.inverse("Note removed!"));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.redBright.inverse("Note not found!"));
    }
};

const saveNotes = function (notes) {
    // notları notlar.json adresine kaydetmeyi ifade ediyor
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
        addNote: addNote,
        getNotes: getNotes,
        removeNote: removeNote
    };