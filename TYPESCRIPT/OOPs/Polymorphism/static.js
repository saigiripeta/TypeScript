var static1 = /** @class */ (function () {
    function static1() {
    }
    static1.meth1c = function () {
        console.log("meth1 calling");
    };
    static1.var_one = "saigiri";
    static1.var_two = "hello";
    return static1;
}());
var objs = new static1();
static1.meth1c();
console.log(static1.var_two);
//objs.var_one;
//ar_one' does not exist on type 'static1'. Did you mean to access the static member 'static1.var_one' instead?
