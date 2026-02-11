class privatem{
    private var_one="Hello";

    private meth1():string{
        return "any"
    }
}

let objm = new privatem();
objm.var_one; //var_one' is private and only accessible within class 'privatem

objm.meth1();  //meth1' is private and only accessible within class 'privatem'
