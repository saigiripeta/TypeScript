class param_constructor{
     data1:string;
     data2:string;
     data3:string;

     constructor(arg1:string, arg2:string, arg3:string){
        this.data1 = arg1;
        this.data2 = arg2;
        this.data3 = arg3;
     }

}

let objpc = new param_constructor("Angular","Springboot","Sql server");

console.log(objpc.data1, objpc.data2, objpc.data3);