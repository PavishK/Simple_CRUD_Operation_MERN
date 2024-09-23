function callme(){
    console.log("Hello, World!");
}
callme()

//callBackFunction

function Example(add,sub){
    console.log(add(1,2));
    console.log(sub(1,2));
}

const add=(a,b)=>a+b;
const sub=(a,b)=>a-b;

Example(add,sub);

function ex(){
    return {
        add:(a,b)=>a+b,
        sub:(a,b)=>a-b,
    }
}

const Math=ex()
console.log(Math.add(1,2));

var num=10;
const newPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(num%2===0) resolve("Even");
        else reject("Odd");
    })
})

newPromise.then(res=>{console.log(res)}).catch(err=>console.log(err));

//Promise Types
/*
all
race
allSettled
any
*/

const arr=[1,2,3,4,5];
const arr2=[4,3,2,1];
console.log(...arr,...arr2)

//map

const arrS=[1,2,3,4,5];
const mapResult=arrS.map((val)=>val*2)
console.log(mapResult)

//filter

const filterResult=arrS.filter((data)=>data%2==0)
console.log(filterResult)

//spread, rest
//rest
function Rest(...args){
    console.log(args)
}

Rest(arr,arr2);

//spread
console.log([...arr,...arr2])

//structure and destructuring


//struct
const obj={
    name:"Kira",
    age:25,
}


//destruct
const {name,age}=obj;
const [a,b,c]=arr;

console.log(a,b,c); 

