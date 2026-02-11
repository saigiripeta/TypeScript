class protectedM{
    protected Var_one:string ="hello";

    protected meth1():void{
        console.log("hello world")
    }

  protected constructor(){

  }

}

class proctectedchild extends protectedM{}

let objpro = new proctectedchild(); // protected and only accessible within the class declaration