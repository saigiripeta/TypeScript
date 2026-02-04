class student1{                               //creating class
    sid:number=101;
    sname:string="saigiri";
    isactive:boolean=true;
    armarks:number[]=[45,55,65];

     calucatetotalmarks():number{               //creating function
        let total:number=0;
        for( var item of this.armarks ){
         total +=item;
        }
        return total;
     }
     calucateresult():string{                //creating function
      let total =this.calucatetotalmarks();
      let avg:number=total/3;
      if(avg>35){
         return "pass";
      }
      else{
         return "fail";
      }
     }
     greet(name:string):void{               //creating method 
      console.log("welcome"+this.sname)
     }
}
let obj1:student1 =new student1();
console.log(obj1.calucatetotalmarks());
obj1.greet("saigiri");