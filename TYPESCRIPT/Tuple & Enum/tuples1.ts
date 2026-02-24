let var1 :[number,string, boolean];

var1 =[100,"Angular",true]

var1.forEach((ele,ind)=>{
      console.log(ele)
})


let var2 :[number,number];
var2=[100,200];

var2.push(300)

console.log(var2)

let var3 :readonly[number,number];

var3=[100,200];

var3.push(300) 
//Property 'push' does not exist on type 'readonly [number, number]'

//Destructuring the Tuple

let var4 : [number, number];

var4=[100,200];

let [x,y]= var4;  

console.log(x);

console.log(y  )