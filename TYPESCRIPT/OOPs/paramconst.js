var param_constructor = /** @class */ (function () {
    function param_constructor(arg1, arg2, arg3) {
        this.data1 = arg1;
        this.data2 = arg2;
        this.data3 = arg3;
    }
    return param_constructor;
}());
var objpc = new param_constructor("Angular", "Springboot", "Sql server");
console.log(objpc.data1, objpc.data2, objpc.data3);
