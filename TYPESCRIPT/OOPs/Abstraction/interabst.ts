interface interface1{
    meth1():any;
}

abstract class inabstr implements interface1{
    meth1():any {
        return "Interface with the child class as a abstraction"
    }

    abstract meth2():any;
}

class child2 extends inabstr{
    meth2():any {
        return "===>This using the inteface and the abstraction "
    }
}

let iaobj = new child2();
console.log(iaobj.meth1(), iaobj.meth2())