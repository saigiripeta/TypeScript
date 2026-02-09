class Parent{
    fun_one(): string{
    return "Calling function one"
    }
}

class child extends Parent{
    fun_two():string{
        return "Calling function two"
    }
}

class subchild extends child{
    fun_three():string{
        return "Calling function three"
    }
}

let obj  = new subchild();

console.log(obj.fun_one(), obj.fun_two(), obj.fun_three())