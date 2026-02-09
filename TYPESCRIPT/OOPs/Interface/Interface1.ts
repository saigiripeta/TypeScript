interface interface1{
    Var_one:string;
}

class child implements interface1{
    Var_one: string ="welcome to interfaces"
}

let obj = new child();
console.log(obj.Var_one)