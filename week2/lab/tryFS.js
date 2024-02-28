const fs=require("fs")

fs.readFile("dene.txt","utf-8",(err,data)) =>  { 
        if (err) console.log(`Hata : ${err}`);    
        else{  
            let newData = data.replace(/Deneme/g,"Dene");       
           console.log(newData);   
        }
}