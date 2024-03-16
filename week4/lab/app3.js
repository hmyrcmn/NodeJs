const nums=[1,2,3,4];

const sqrArrow=nums.map(x=>x*x); 

const ssqrRegular=nums.map(function(num){return num*num});

console.log(sqrArrow) //[1,4,9,16]
console.log(ssqrRegular)// [1,4,9,16]