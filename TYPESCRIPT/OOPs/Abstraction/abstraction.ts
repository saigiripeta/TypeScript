abstract class class_one{
   meth1():void{
    console.log("Method one")
   }

   abstract meth2():void;
}

class child extends class_one{
     meth2():  void{
       console.log("Abstract method calling")
    }
}

let obj = new child();
console.log(obj.meth1(), obj.meth2())