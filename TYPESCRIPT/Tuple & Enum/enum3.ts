enum EnumFun{
    const1= 100,
    const2 =200,
    const3 =300
}

function EnumFunction(param1:EnumFun){
    console.log(param1)
}

EnumFunction(100)
EnumFunction(EnumFun.const1)
EnumFunction(EnumFun.const2)
EnumFunction(EnumFun.const3)

enum EnumIniti{
    const ="Hello",
    consti1  //Enum member must have initializer.
}
