class static1{
 static var_one:string ="saigiri"
 static var_two:string="hello";

 static meth1c():void{
    console.log("meth1 calling")
 }

}

let objs= new static1();
static1.meth1c();
 console.log(static1.var_two);
//objs.var_one;
//ar_one' does not exist on type 'static1'. Did you mean to access the static member 'static1.var_one' instead?