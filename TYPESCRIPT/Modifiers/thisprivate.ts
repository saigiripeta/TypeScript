class thisprivate{
    private var_one:string ="Hello";
    public var_two :string = this.var_one;

    private meth1():string{
        return "with the this Keyword"
    }

    public meth2(){
        return this.meth1()
    }
}

class childth extends thisprivate{
}

let objth = new childth();

console.log(objth.meth2());

console.log(objth.var_two)