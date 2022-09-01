document.querySelector('.cross').style.display='none';

document.querySelector('.hamburger').addEventListener('click', ()=>{
   document.querySelector('.sidebar').classList.toggle('sidebarGo');
   if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.cross').style.display='none';
    document.querySelector('.ham').style.display='inline';
   }
   else{
    document.querySelector('.ham').style.display='none';
    setTimeout(()=>{

        document.querySelector('.cross').style.display='inline';
    },400)

   }
});


sayHello();
console.log(i);
function sayHello(){
    console.log("Hello");
}

//we have to initialize the const variable at the time of declaring
var we=12;
we=145;
function sayHello(){
    we=1211;
    console.log(we);
}
console.log(we);
sayHello();
console.log(we);
var i=10;


//factory function
function creatCount(){
    return {
        count:0,
        increment: function(){
            this.count++;
        }
    }
}


let c=creatCount();
c.increment();
c.increment();
console.log(c.count);
let another=c;
another.increment();
console.log(c.count);


// function createConcat(seperator,...strings){
//     let returnVal="";
//     strings.forEach((string,i)=>{
//         if(i==strings.length-1){
//             returnVal+=string;
//         }
//         else{
//             returnVal+=string+seperator;
//         }
//     })
//     return returnVal;
// }


// console.log(createConcat("+","this","is","a","keyword"));

// function matchHouses(houses){
//     if(houses==0){return 0;}
//     return (houses*6)-(houses-1);
// }

// //by references

// console.log(matchHouses(4));