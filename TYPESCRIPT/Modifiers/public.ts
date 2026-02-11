class publicm {
    public var_one:string;

    public constructor(){
        this.var_one ="constructor with the Public modifier "
    }

    public meth1():string{
        return "Public method"
    }
}

class child extends publicm{}
let obj = new child();
console.log(obj.meth1())