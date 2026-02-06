class Parent{
    Var_data: string ="Hello"
}

class child extends Parent{
    var_two :string ="Angular"
}

let p = new Parent();
console.log(p.Var_data)

let c = new child();
console.log(c.Var_data);
console.log(c.var_two)

let p1: Parent = new child();
console.log(p1.Var_data)

let c1: child= new Parent();
//Property 'var_two' is missing in type 'Parent' but required in type 'child'.
