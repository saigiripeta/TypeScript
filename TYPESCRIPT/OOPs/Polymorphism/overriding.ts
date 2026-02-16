class Parent{

    dbfun():string{
        return "Data comes from the Oracle Database"
    }
}

class child extends Parent{
    dbfun(): string {
        return "Data comes from the SQl Lite Database"
    }
}

let obj = new child();
console.log(obj.dbfun())