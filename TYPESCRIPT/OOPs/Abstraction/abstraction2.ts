abstract class abs1{
    meth1():string{
        return "Meth1 Calling"
    }

    abstract meth2():string;
}

abstract class abschild extends abs1{
     meth2(): string {
         return "Meth2 calling"
     }

     abstract meth3():string;
}

class abschild2 extends abschild{
    meth3(): string {
        return "Meth3 calling"
    }
}

let obj1 = new abschild2 ();

console.log(obj1.meth1(), obj1.meth2(), obj1.meth3())