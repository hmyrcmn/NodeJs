//traditional way -1 
const sq=function(x){return x*x};

console.log(sq(10)); // 100


// arrow fons hs es6 feature fonsiyon tanımlaması 
const sqr= (x)=> { return x * x };
console.log(sqr(5));//25

// eger basit geriye döndürme varsa bu yontem kısadır
const sqrm= (x)=>  x * x;
console.log(sqrm(7)) 


const myEvent={
        name:"my Event",
        printGuestList: function(){
                console.log(this.name + " için katılımcı listesi  guest list :");
            }
}
myEvent.printGuestList();


const myEvent1={
        name:"my Event",
        printGuestList: () => {
                console.log(this.name + " için katılımcı listesi  guest list :");
            }
}
myEvent1.printGuestList();  // error this is undefined because of the context of :undefined için katılımcı listesi  guest list 

// how can solve:   : ve => kaldırıldı
const myEvent2 = {
        name: "my Event",
        guestList: ["a", "b", "c"], // Use square brackets to define an array
        printGuestList: function () {
            console.log(this.name + " için katılımcı listesi guest list :");
            const that=this  // erişimi mümkün kıla ama önerilmeez 
            this.guestList.forEach(function (guest) {
                console.log("- " +this.name); // parent in fonksiyonuna erişilemiyor , undefined hatası verir.
                // console.log("-" + guest);
            });

            this.guestList.forEach( (guest) => {
                console.log("- " +this.name); 
                // console.log("-" + guest);
            });
        }
    };
    
       

myEvent2.printGuestList();  // error this is undefined because of the context of :undefined için katılımcı listesi  guest list 
