class genfun{

    funwithgenerics<A,B>(param1:A,param2:B):void{
      
        console.log(param1, param2)
    }
    
}

let obj1= new genfun();
console.log(obj1.funwithgenerics<string,string>("====>"+"Function with", "Generics"))
