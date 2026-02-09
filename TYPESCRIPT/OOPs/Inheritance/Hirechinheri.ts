class ParentOne{
 dialog1():string{
    return "Hello world"
 }
}

class child_one extends ParentOne{
 var_chone:string = "Child One"
}

class child_two extends ParentOne{
    var_chtwo:string="child two"
}

class child_three extends ParentOne{
    var_chthree:string ="child three"
}

let cobj = new child_one();
console.log(cobj.dialog1(), cobj.var_chone); //Hello world Child One

let cobj2 = new child_two();
console.log(cobj2.dialog1(),cobj2.var_chtwo) //Hello world child two