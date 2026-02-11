interface methinterface{
    fun_one():void;
    fun_two():void;
    fun_three():void;
}

let objmeth: methinterface ={
    fun_one : ():void=>{
        console.log("Calling method1")
    },
    fun_two :():void=>{
        console.log("Calling method2")
    },
    fun_three:():void=>{
        console.log("calling method3")
    }
}

objmeth.fun_one();
objmeth.fun_two();
objmeth.fun_three();