async function doubleAfterDelay(x){
        return new  Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(2*x);
            }, Math.random() * 10000)
        })


    }
    
async function demo(){
        let result= await doubleAfterDelay(5);
        console.log(`Result of doubling after delay: ${result}`);
        }

        demo();
    