var tsclass = /** @class */ (function () {
    function tsclass(arg1, arg2) {
        this.data_one = arg1;
        this.data_two = arg2;
    }
    tsclass.prototype.function_one = function () {
        return this.data_one;
    };
    tsclass.prototype.function_two = function () {
        return this.data_two;
    };
    return tsclass;
}());
var obj2 = new tsclass("Hello", "Saigiri");
console.log(obj2.function_one());
console.log(obj2.function_two());
