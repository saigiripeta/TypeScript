var Generics = /** @class */ (function () {
    function Generics(arg1, arg2, arg3) {
        this.product1 = arg1;
        this.product2 = arg2;
        this.product3 = arg3;
        console.log(this.product1, this.product2, this.product3);
    }
    return Generics;
}());
var obj = new Generics("Generics", 12, "Example");
console.log(obj.product1);
