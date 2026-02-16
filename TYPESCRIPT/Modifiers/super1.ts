class superclass{
    constructor(name:string, age:number){
      console.log(`${name}, ${age}`)
    }

    meth2():string{
        return "Hello"
    }
}

class superchild extends superclass{
    constructor(name:string,age:number,pincode: number){
        super(name,age)
        console.log(`${name}, ${age},${pincode}`)
    }

    meth3() :string{
        return super.meth2();
    }
}

let sp2 = new superchild("saigiri",121,2)
console.log(sp2.meth2())
console.log(sp2.meth3())